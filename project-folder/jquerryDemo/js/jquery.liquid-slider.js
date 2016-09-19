/*!
 *  Liquid Slider
 *  Copyright 2012 Kevin Batdorf
 *  http://liquidslider.com
 *  MIT license
 */

// Utility for creating objects in older browsers
if (typeof Object.create !== 'function') {
  Object.create = function(obj) {
    'use strict';
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

;(function($, window, document, undefined) {
  'use strict';

  $.fn.liquidSlider = function(options) {
    return this.each(function() {
      var slider = Object.create(LiquidSlider);
      slider.init(options, this);
      $.data(this, 'liquidSlider', slider);
    });
  };

  $.fn.liquidSlider.options = {
    autoHeight: true,
    minHeight: 0,
    heightEaseDuration: 1500,
    heightEaseFunction: 'easeInOutExpo',

    slideEaseDuration: 1500,
    slideEaseFunction: 'easeInOutExpo',
    slideEaseFunctionFallback: 'swing',
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    continuous: true,
    fadeInDuration: 500,
    fadeOutDuration: 500,

    autoSlide: false,
    autoSlideDirection: 'right',
    autoSlideInterval: 6000,
    forceAutoSlide: false,
    pauseOnHover: false,

    dynamicArrows: true,
    dynamicArrowsGraphical: true,
    dynamicArrowLeftText: '&#171; left',
    dynamicArrowRightText: 'right &#187;',
    hideSideArrows: false,
    hideSideArrowsDuration: 750,
    hoverArrows: true,
    hoverArrowDuration: 250,

    dynamicTabs: true,
    dynamicTabsHtml: true,
    includeTitle: true,
    panelTitleSelector: '.title',
    dynamicTabsAlign: 'left',
    dynamicTabsPosition: 'top',
    navElementTag: 'div',

    firstPanelToLoad: 1,
    hashLinking: false,
    hashTitleSelector: '.title',

    keyboardNavigation: false,
    leftKey: 39,
    rightKey: 37,
    panelKeys: {
      1: 49,
      2: 50,
      3: 51,
      4: 52
    },

    responsive: true,
    mobileNavigation: true,
    mobileNavDefaultText: 'Menu',
    mobileUIThreshold: 0,
    hideArrowsWhenMobile: true,
    hideArrowsThreshold: 0,
    useCSSMaxWidth: 3000,

    preload: function() {
      var _this = this;
      jQuery(window).bind('load', function() {
        _this.finalize();
      });
    },
    onload: function() {},
    pretransition: function() {
      this.transition();
    },
    callback: function() {},

    preloader: false,
    swipe: true,
    swipeArgs: undefined
  };

})(jQuery, window, document);

// Create the Liquid Slider Object
var LiquidSlider = {};

LiquidSlider.init = function(options, elem) {
  var _this = this;

  // Cache the element
  _this.elem = elem;
  _this.$elem = jQuery(elem);

  jQuery('.no-js').removeClass('no-js');

  // Cache the ID and class. This allows for multiple instances with any ID name supplied
  _this.sliderId = '#' + (_this.$elem).attr('id');
  _this.$sliderId = jQuery(_this.sliderId);

  // Set the options
  _this.options = jQuery.extend({}, jQuery.fn.liquidSlider.options, options);

  // Variable for the % sign if needed (responsive), otherwise px
  _this.pSign = (_this.options.responsive) ? '%' : 'px';

  // jQuery or CSS3 ?
  _this.determineAnimationType();

  // Disable some stuff when not responsive
  if (!_this.options.responsive) {
    _this.options.mobileNavigation = false;
    _this.options.hideArrowsWhenMobile = false;
  }

  // If using animate.css, add the class here and disable other options.
  if (_this.options.slideEaseFunction === 'animate.css') {
    if (!_this.useCSS) {
      _this.options.slideEaseFunction = _this.options.slideEaseFunctionFallback;
    } else {
      _this.options.continuous = false;
      _this.animateCSS = true;
    }
  }

  // Build the tabs and navigation
  _this.build();

  // Register events
  _this.events();

  // Fix width
  if (!_this.options.responsive && _this.options.dynamicArrows)
    _this.$sliderWrap.width(_this.$sliderId.outerWidth(true) +
      _this.leftArrow.outerWidth(true) +
      _this.rightArrow.outerWidth(true));

  // Set the slider as loaded (almost)
  _this.loaded = true;

  _this.options.preload.call(_this);

};

LiquidSlider.build = function() {
  var _this = this,
    isAbsolute;

  // Wrap the entire slider unless it exists already
  if ((_this.$sliderId).parent().attr('class') !== 'ls-wrapper') {
    (_this.$sliderId).wrap('<div id="' +
      (_this.$elem).attr('id') +
      '-wrapper" class="ls-wrapper"></div>');
  }

  // Cache the wrapper
  _this.$sliderWrap = jQuery(_this.sliderId + '-wrapper');

  // Add the preloader
  _this.options.preloader && _this.addPreloader();

  // Add the .panel class to the individual panels
  jQuery(_this.sliderId).children().addClass((_this.$elem).attr('id') + '-panel ls-panel');
  _this.panelClass = _this.sliderId + ' .' + (_this.$elem).attr('id') + '-panel:not(.clone)';
  _this.$panelClass = jQuery(_this.panelClass);

  // Wrap all panels in a div, and wrap inner content in a div
  (_this.$panelClass).wrapAll('<div class="panel-container"></div>');
  (_this.$panelClass).wrapInner('<div class="panel-wrapper"></div>');
  _this.panelContainer = (_this.$panelClass).parent();
  _this.$panelContainer = _this.panelContainer;

  // Build hash links
  _this.options.hashLinking && _this.buildHashTags();

  // If using fade transition, add the class here and disable other options.
  if (_this.options.slideEaseFunction === 'fade') {
    (_this.$panelClass).addClass('fade');
    _this.options.continuous = false;
    _this.fade = true;
  }

  // Build navigation tabs
  if (_this.options.dynamicTabs) {
    _this.addNavigation();
  } else {
    _this.options.mobileNavigation = false;
  }

  // Build navigation arrows or disable features
  if (_this.options.dynamicArrows) {
    _this.addArrows();
  } else {
    _this.options.hoverArrows = false;
    _this.options.hideSideArrows = false;
    _this.options.hideArrowsWhenMobile = false;
  }

  /**
   * Create a container width to allow for a smooth float right.
   * Won't calculate arrows if positioned absolute
   */
  isAbsolute = ((_this.$leftArrow) && (_this.$leftArrow).css('position') === 'absolute') ? 0 : 1;

  // Set slider width
  _this.totalSliderWidth = (_this.$sliderId).outerWidth(true) +
    (jQuery(_this.$leftArrow).outerWidth(true)) * isAbsolute +
    (jQuery(_this.$rightArrow).outerWidth(true)) * isAbsolute;
  jQuery((_this.$sliderWrap)).css('width', _this.totalSliderWidth);

  // Align navigation tabs
  _this.options.dynamicTabs && _this.alignNavigation();

  /*
   * There is no need to use continuous if arrow navigation is hidden on sides.
   * If you want to use autoslide and still want hideSideArrows, use the API
   */
  _this.options.hideSideArrows && (_this.options.continuous = false);

  // Clone panels if continuous is enabled
  if (_this.options.continuous) {
    (_this.$panelContainer).prepend((_this.$panelContainer).children().last().clone().addClass('clone'));
    (_this.$panelContainer).append((_this.$panelContainer).children().eq(1).clone().addClass('clone'));
  }
  var clonedCount = (_this.options.continuous) ? 2 : 0;

  // Count the number of panels and get the combined width
  _this.panelCount = jQuery(_this.panelClass).length;
  _this.panelCountTotal = (_this.fade) ? 1 : _this.panelCount + clonedCount;
  _this.panelWidth = jQuery(_this.panelClass).outerWidth();
  _this.totalWidth = _this.panelCountTotal * _this.panelWidth;

  // Apply the width to the panel container
  jQuery(_this.sliderId + ' .panel-container').css('width', _this.totalWidth);

  // How far should we slide?
  _this.slideDistance = (_this.options.responsive) ? 100 : jQuery(_this.sliderId).outerWidth();
  if (_this.useCSS && _this.options.responsive) {
    _this.totalWidth = 100 * _this.panelCountTotal;
    _this.slideDistance = 100 / _this.panelCountTotal;
  }

  // Make responsive
  _this.options.responsive && _this.makeResponsive();

  // Apply starting position
  _this.prepareTransition(_this.getFirstPanel(), true);

  // Update the class
  _this.updateClass();
};

LiquidSlider.determineAnimationType = function() {
  var _this = this,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx = '',
    i = 0;

  /* Decide whether or not to use CSS transitions or jQuery.
   * Code taken from:
   * https://developer.mozilla.org/en-US/docs/CSS/CSS_animations/Detecting_CSS_animation_support
   */
  _this.useCSS = false;
  if (_this.elem.style.animationName) _this.useCSS = true;
  if (_this.useCSS === false) {
    for (i = 0; i < domPrefixes.length; i++) {
      if (_this.elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
        pfx = domPrefixes[i];
        animationstring = pfx + 'Animation';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        _this.useCSS = true;
        break;
      }
    }
  }
  (document.documentElement.clientWidth > _this.options.useCSSMaxWidth) && (_this.useCSS = false);
};

LiquidSlider.configureCSSTransitions = function(slide, height) {
  var _this = this,
    slideTransition,
    heightTransition,
    sFunction,
    hFunction;

  // Penner equations in attempt to match jQuery Easing
  _this.easing = {
    easeOutCubic: 'cubic-bezier(.215,.61,.355,1)',
    easeInOutCubic: 'cubic-bezier(.645,.045,.355,1)',
    easeInCirc: 'cubic-bezier(.6,.04,.98,.335)',
    easeOutCirc: 'cubic-bezier(.075,.82,.165,1)',
    easeInOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
    easeInExpo: 'cubic-bezier(.95,.05,.795,.035)',
    easeOutExpo: 'cubic-bezier(.19,1,.22,1)',
    easeInOutExpo: 'cubic-bezier(1,0,0,1)',
    easeInQuad: 'cubic-bezier(.55,.085,.68,.53)',
    easeOutQuad: 'cubic-bezier(.25,.46,.45,.94)',
    easeInOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
    easeInQuart: 'cubic-bezier(.895,.03,.685,.22)',
    easeOutQuart: 'cubic-bezier(.165,.84,.44,1)',
    easeInOutQuart: 'cubic-bezier(.77,0,.175,1)',
    easeInQuint: 'cubic-bezier(.755,.05,.855,.06)',
    easeOutQuint: 'cubic-bezier(.23,1,.32,1)',
    easeInOutQuint: 'cubic-bezier(.86,0,.07,1)',
    easeInSine: 'cubic-bezier(.47,0,.745,.715)',
    easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
    easeInOutSine: 'cubic-bezier(.445,.05,.55,.95)',
    easeInBack: 'cubic-bezier(.6,-.28,.735,.045)',
    easeOutBack: 'cubic-bezier(.175,.885,.32,1.275)',
    easeInOutBack: 'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // Set some defaults
  sFunction = _this.easing[_this.options.slideEaseFunction] || _this.options.slideEaseFunction;
  hFunction = _this.easing[_this.options.heightEaseFunction] || _this.options.heightEaseFunction;

  // Build a CSS class depending on the type of transition
  if (_this.useCSS) {
    slideTransition = 'all ' + (slide || _this.options.slideEaseDuration) + 'ms ' + sFunction;
    heightTransition = 'all ' + (height || _this.options.heightEaseDuration) + 'ms ' + hFunction;

    // Build the width transition rules
    jQuery(_this.panelContainer).css({
      '-webkit-transition': slideTransition,
      '-moz-transition': slideTransition,
      '-ms-transition': slideTransition,
      '-o-transition': slideTransition,
      'transition': slideTransition
    });

    // Build the height transition rules
    if (_this.options.autoHeight) {
      (_this.$sliderId).css({
        '-webkit-transition': heightTransition,
        '-moz-transition': heightTransition,
        '-ms-transition': heightTransition,
        '-o-transition': heightTransition,
        'transition': heightTransition
      });
    }
  }
};

LiquidSlider.transitionFade = function() {
  var _this = this;

  jQuery(_this.panelClass).eq(_this.nextPanel)
    .fadeTo(_this.options.fadeInDuration, 1.0).css('z-index', 1);
  jQuery(_this.panelClass).eq(_this.prevPanel)
    .fadeTo(_this.options.fadeOutDuration, 0).css('z-index', 0);
  _this.callback(_this.options.callback, true);
};

LiquidSlider.hover = function() {
  var _this = this;

  (_this.$sliderWrap).hover(
    function() {
      _this.options.hoverArrows && _this.hideShowArrows(_this.options.fadeInDuration, true, true, false);
      _this.options.pauseOnHover && clearTimeout(_this.autoSlideTimeout);
    },
    function() {
      _this.options.hoverArrows && _this.hideShowArrows(_this.options.fadeOutnDuration, true, false, true);
      (_this.options.pauseOnHover && _this.options.autoSlide) && _this.startAutoSlide(true);
    }
  );
};

LiquidSlider.events = function() {
  var _this = this;

  // Set events for all types of navigation
  _this.options.dynamicArrows       && _this.registerArrows();
  _this.options.dynamicTabs         && _this.registerNav();
  _this.options.swipe               && _this.registerTouch();
  _this.options.keyboardNavigation  && _this.registerKeyboard();

  // Click to stop autoSlider
  (_this.$sliderWrap).find('*').on('click', function() {
    if (_this.options.forceAutoSlide) {
      _this.startAutoSlide(true);
    } else if (_this.options.autoSlide) {
      _this.stopAutoSlide();
    }
  });
  _this.hover();
};

LiquidSlider.setNextPanel = function(direction) {
  var _this = this;

  if (direction === _this.nextPanel) return;
  _this.prevPanel = _this.nextPanel;

  if (_this.loaded) {
    if (typeof direction === 'number') {
      _this.nextPanel = direction;
    } else {

      // "left" = -1; "right" = 1;
      _this.nextPanel += (~~(direction === 'right') || -1);

      // If not continuous, slide back at the last or first panel
      _this.options.continuous ||
        (_this.nextPanel = (_this.nextPanel < 0) ? _this.panelCount - 1 : (_this.nextPanel % _this.panelCount));
    }
    if (_this.fade || _this.animateCSS) {
      _this.prepareTransition(_this.nextPanel);
    } else {
      _this.verifyPanel();
    }
  }
};

LiquidSlider.getFirstPanel = function() {
  var _this = this,
    output;

  // is there a hash tag?
  if (_this.options.hashLinking) {
    output = jQuery.inArray(_this.convertRegex(window.location.hash), _this.hashLinks);

    // Default to panel 1 if mistyped
    if (output === -1) output = 0;
  }
  return (output) ? output : _this.options.firstPanelToLoad - 1;
};

/**
 * Searches for the title class and returns the formatted hashtag
 *
 * @param <String> searchTerm
 * @param <Number> input
 * @return <String>
 */
LiquidSlider.getFromPanel = function(searchTerm, panelNumber) {
  var _this = this;

  return _this.convertRegex(_this.$panelClass.find(searchTerm).eq(panelNumber).text());
};

/**
 * Removes unwanted characters for browser hash
 *
 * @param <Number> input
 * @return <String>
 */
LiquidSlider.convertRegex = function(input) {
  return jQuery.trim(input)
  .replace(/[^\w -]+/g,'')
  .replace(/ +/g,'-')
  .toLowerCase();
};

/**
 * Updates all classes for current nav and panels
 *
 * @param <Object> crosslink
 */
LiquidSlider.updateClass = function(crosslink) {
  var _this = this;

  if (_this.options.dynamicTabs) {
    jQuery((_this.$sliderWrap)).find('> .ls-nav .tab' + _this.sanitizeNumber(_this.nextPanel))
      .addClass('current')
      .siblings().removeClass('current');
  }

  // Add it to cloned panels
  _this.$panelClass.eq(_this.sanitizeNumber(_this.nextPanel) - 1 )
      .addClass('currentPanel')
      .siblings().removeClass('currentPanel');

  _this.$clones = jQuery(_this.sliderId + ' .clone');
  if (_this.options.continuous && ((_this.nextPanel === -1) || (_this.nextPanel === _this.panelCount))) {
    _this.$clones.addClass('currentPanel');
  } else {
    _this.$clones.removeClass('currentPanel');
  }

  // Crosslinks
  // <a href="#2" onclick="api.setNextPanel(1);api.updateClass($(this))">slide 1</a>
  if (crosslink) {
    $('.ls-current').removeClass('ls-current');
    crosslink.addClass('ls-current');
  }
};

/**
 * Returns the panel number 1 based instead of 0 based
 *
 * @param <Number> panel
 * @return <Number>
 */
LiquidSlider.sanitizeNumber = function(panel) {
  var _this = this;

  switch (true) {
    case (panel >= _this.panelCount):
      return 1;
    case (panel <= -1):
      return _this.panelCount;
    default:
      return panel + 1;
  }
};

LiquidSlider.finalize = function() {
  var _this = this;

  // Adjust the height again
  var height = (_this.options.autoHeight) ? _this.getHeight() : _this.getHeighestPanel(_this.nextPanel);
  _this.options.autoHeight && _this.adjustHeight(true, height);
  _this.options.autoSlide  && _this.autoSlide();
  _this.options.preloader  && _this.removePreloader();
  _this.onload();
};

/**
 * Runs after each slide transition completes
 *
 * @param <Function> callbackFn
 * @param <Bool> isFade
 */
LiquidSlider.callback = function(callbackFn, isFade) {
  var _this = this;
  if (callbackFn && _this.loaded) {

    // Looks for the end of a transition with CSS, otherwise jQuery
    if (_this.useCSS && typeof isFade !== 'undefined') {
      jQuery('.panel-container').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function() {
          callbackFn.call(_this);
        });
    } else {
      setTimeout(function() {
        callbackFn.call(_this);
      }, _this.options.slideEaseDuration + 50);
    }
  }
};

LiquidSlider.onload = function() {
  var _this = this;
  _this.options.onload.call(_this);
};

/**
 * Prepares the slider for transition, giving the dev the option to
 * not animate, and override the pre and callback hooks
 *
 * @param <Number> nextPanel
 * @param <Bool> noAnimation
 * @param <Bool> noPretransition
 * @param <Bool> noPosttransition
 */
LiquidSlider.prepareTransition = function(nextPanel, noAnimation, noPretransition, noPosttransition) {
  var _this = this;

  // Override panel
  _this.nextPanel = nextPanel || 0;

  // Option to not update classes, etc
  noPretransition || _this.pretransition(_this.options.pretransition);

  // stores some variables, then sends to pretransition hook
  _this.noAnimation = noAnimation;
  _this.noPosttransition = noPosttransition;
  if (!_this.loaded) {
    _this.transition();
  } else {
    _this.options.pretransition.call(_this);
  }
};

LiquidSlider.pretransition = function() {
  var _this = this;

  _this.options.hashLinking       && _this.updateHashTags();
  _this.options.mobileNavigation  && _this.dropdownSelect.val('tab' + (_this.nextPanel + 1));
  _this.options.hideSideArrows    && _this.hideShowArrows();
  _this.updateClass();
};

LiquidSlider.getTransitionMargin = function() {
  var _this = this;

  return -(_this.nextPanel * _this.slideDistance) -
    (_this.slideDistance * ~~(_this.options.continuous));
};

LiquidSlider.transition = function() {
  var _this = this,
      marginLeft = _this.getTransitionMargin();

  if (_this.animateCSS && _this.loaded) {
    _this.transitionOutAnimateCSS();
    return false;
  }

  // Only slide if we are going to a new panel
  if ((marginLeft + _this.pSign) !== (_this.panelContainer).css('margin-left') || (marginLeft !== -100)) {

    // Adjust the height
    (_this.options.autoHeight && !_this.animateCSS) && _this.adjustHeight(true, _this.getHeight());

    // SLIDE!
    switch (true) {
      case _this.fade:
        _this.transitionFade();
        break;
      case _this.animateCSS:
        _this.transitionInAnimateCSS(marginLeft);
        break;
      case _this.useCSS:
        _this.transitionCSS(marginLeft, _this.noAnimation);
        break;
      default:
        _this.transitionjQuery(marginLeft, _this.noAnimation);
        break;
    }
  }
  _this.noPosttransition || _this.callback(_this.options.callback);
};

// TODO run these together
// TODO this seems buggy in the demo
LiquidSlider.transitionOutAnimateCSS = function() {
  var _this = this;

  jQuery(_this.panelClass).removeClass(_this.options.animateIn + ' animated');
  jQuery(_this.panelClass).eq(_this.prevPanel).addClass('animated ' + _this.options.animateOut);
  _this.callback(_this.transitionInAnimateCSS, undefined);
};

// TODO run these together
LiquidSlider.transitionInAnimateCSS = function() {
  var _this = this;

  _this.options.autoHeight && _this.adjustHeight(false, _this.getHeight());
  _this.transitionCSS(_this.getTransitionMargin(), !_this.loaded);
  jQuery(_this.panelClass).removeClass(_this.options.animateOut + ' animated');
  jQuery(_this.panelClass).eq(_this.nextPanel).addClass('animated ' + _this.options.animateIn);
  _this.callback(_this.options.callback, undefined);
};

LiquidSlider.transitionCSS = function(marginLeft, noAnimation) {
  var _this = this;

  noAnimation && _this.configureCSSTransitions('0', '0');
  (_this.panelContainer).css({
    '-webkit-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
    '-moz-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
    '-ms-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
    '-o-transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)',
    'transform': 'translate3d(' + marginLeft + _this.pSign + ', 0, 0)'
  });

  // Reset transitions
  if (noAnimation) {
    _this.callback(function() {
      _this.configureCSSTransitions();
    });
  } else {
    _this.configureCSSTransitions();
  }
};

LiquidSlider.transitionjQuery = function(marginLeft, noAnimation) {
  var _this = this;

  if (noAnimation) {
    (_this.panelContainer).css('margin-left', marginLeft + _this.pSign);
  } else {
    (_this.panelContainer).animate({
      'margin-left': marginLeft + _this.pSign
    }, {
      easing: jQuery.easing.hasOwnProperty(_this.options.slideEaseFunction) ? _this.options.slideEaseFunction : _this.options.slideEaseFunctionFallback,
      duration: _this.options.slideEaseDuration,
      queue: false
    });
  }
};

/**
 * Returns the height of the upcoming panel,
 * but allows the dev to specify a minimum
 *
 * @param <Number> height
 */
LiquidSlider.getHeight = function(height) {
  var _this = this;

  height = height || _this.$panelClass.eq(_this.sanitizeNumber(_this.nextPanel) - 1).outerHeight(true);

  // Allows a minimum height in the settings to override
  height = (height < _this.options.minHeight) ? _this.options.minHeight : height;
  return height;
};

/**
 * Looks for the heighest panel in the entire slider
 *
 * @param <Number> height
 */
LiquidSlider.getHeighestPanel = function() {
  var _this = this,
      height,
      heighest = 0;

  _this.$panelClass.each(function() {
    height = jQuery(this).outerHeight(true);
    heighest = (height > heighest) ? height : heighest;
  });
  if (_this.options.autoHeight) return heighest;
};

/**
 * Basically checks if we need to jump panels
 * at the end of a transition while using the
 * continuous option (verify we are in the right place)
 */
LiquidSlider.verifyPanel = function() {
  var _this = this,
    clickable = false;

  // Continuous slide requires careful clicking
  if (_this.options.continuous) {

    // If they click beyond, run it through again.
    switch (true) {

      // Clicking too far right
      case (_this.nextPanel > _this.panelCount):
        _this.nextPanel = _this.panelCount;
        _this.setNextPanel(_this.panelCount);
        break;

      // Clicking too far left
      case (_this.nextPanel < -1):
        _this.nextPanel = -1;
        _this.setNextPanel(-1);
        break;

      // Clicking to a cloned panel
      case clickable || ((_this.nextPanel === _this.panelCount) || (_this.nextPanel === -1)):

        // If on a cloned panel, return to the intended panel
        _this.prepareTransition(_this.nextPanel);
        _this.updateClass();
        clearTimeout(cloneJumper);
        var cloneJumper = setTimeout(function() {

          // But do not jump until the transition is complete
          if (_this.nextPanel === _this.panelCount) {
            _this.prepareTransition(0, true, true, true);
          } else if (_this.nextPanel === -1) {
            _this.prepareTransition(_this.panelCount - 1, true, true, true);
          }
        }, _this.options.slideEaseDuration + 50);
        break;

      // The default transition
      default:
        clickable = true;
        _this.prepareTransition(_this.nextPanel);
        break;
    }
  } else {

    // Non-continuous just needs to stay in bounds
    if (_this.nextPanel === _this.panelCount) {
      _this.nextPanel = 0;
    } else if (_this.nextPanel === -1) {
      _this.nextPanel = (_this.panelCount - 1);
    }
    _this.prepareTransition(_this.nextPanel);
  }
};

/**
 * This will add the navigation to the slider.
 * navClass isn't use internally, but may be used
 * with the API (untested)
 *
 * @param <String> navClass
 */
LiquidSlider.addNavigation = function(navClass) {
  var _this = this,
    dynamicTabsElm = '<' + _this.options.navElementTag + ' class="ls-nav"><ul id="' +
      (_this.$elem).attr('id') + '-nav-ul"></ul></' + _this.options.navElementTag + '>';

  // Add basic frame
  if (_this.options.dynamicTabsPosition === 'bottom') {
    (_this.$sliderId).after(dynamicTabsElm);
  } else {
    (_this.$sliderId).before(dynamicTabsElm);
  }

  // Add responsive navigation
  if (_this.options.mobileNavigation) {
    var selectBoxDefault = (_this.options.mobileNavDefaultText) ?
      '<option disabled="disabled" selected="selected">' +
      _this.options.mobileNavDefaultText + '</option>' :
      null,
      dropDownList = '<div class="ls-select-box"><select id="' +
        (_this.$elem).attr('id') + '-nav-select" name="navigation">' +
        selectBoxDefault + '</select></div>';

    // cache elements
    _this.navigation = jQuery(_this.sliderId + '-nav-ul').before(dropDownList);
    _this.dropdown = jQuery(_this.sliderId + '-wrapper .ls-select-box');
    _this.dropdownSelect = jQuery(_this.sliderId + '-nav-select');

    jQuery.each(
      (_this.$elem).find(_this.options.panelTitleSelector),
      function(n) {
        jQuery((_this.$sliderWrap)).find('.ls-select-box select')
          .append('<option value="tab' + (n + 1) + '">' +
          jQuery(this).text() + '</option>');
      }
    );
  }

  // Add standard navigation (tabs)
  jQuery.each(
    (_this.$elem).find(_this.options.panelTitleSelector),
    function(n) {
      jQuery((_this.$sliderWrap)).find('.ls-nav ul').append('<li class="tab' +
        (n + 1) + '"><a class="' + ( navClass || '') + '" href="#' +
        (n + 1) + '">' + _this.getNavInsides(this) + '</a></li>');
      if (!_this.options.includeTitle) jQuery(this).remove();
    }
  );
};

/**
 * Returns the title that will be used,
 * supports html or a string.
 *
 * @param <Element> input
 * @return <String or Element>
 */
LiquidSlider.getNavInsides = function(input) {
  return (this.options.dynamicTabsHtml) ? jQuery(input).html() : jQuery(input).text();
};

LiquidSlider.alignNavigation = function() {
  var _this = this,
    arrow = (_this.options.dynamicArrowsGraphical) ? '-arrow' : '';

  // Set the alignment, adjusting for margins
  if (_this.options.dynamicTabsAlign !== 'center') {
    if (!_this.options.responsive) {
      jQuery((_this.$sliderWrap)).find('.ls-nav ul').css(
        'margin-' + _this.options.dynamicTabsAlign,

        // Finds the width of the arrows and the margin
        jQuery((_this.$sliderWrap)).find(
          '.ls-nav-' +
          _this.options.dynamicTabsAlign +
          arrow
        ).outerWidth(true) + parseInt((_this.$sliderId)
          .css('margin-' + _this.options.dynamicTabsAlign), 10)
      );
    }
    jQuery((_this.$sliderWrap)).find('.ls-nav ul').css('float', _this.options.dynamicTabsAlign);
  }
  _this.totalNavWidth = jQuery((_this.$sliderWrap)).find('.ls-nav ul').outerWidth(true);
  if (_this.options.dynamicTabsAlign === 'center') {

    // Get total width of the navigation tabs and center it
    _this.totalNavWidth = 0;
    jQuery((_this.$sliderWrap)).find('.ls-nav li a').each(function() {
      _this.totalNavWidth += jQuery(this).outerWidth(true);
    });
    jQuery((_this.$sliderWrap)).find('.ls-nav ul').css('width', _this.totalNavWidth + 1);
  }
};

LiquidSlider.registerNav = function() {
  var _this = this;
  (_this.$sliderWrap).find('[class^=ls-nav] li').on('click', function(e) {
    e.preventDefault();
    _this.setNextPanel(parseInt(jQuery(this).attr('class').split('tab')[1], 10) - 1);
    return false;
  });
};

/**
 * This will add the arrows to the slider.
 * arrowClass isn't use internally, but may be used
 * with the API (untested)
 *
 * @param <String> arrowClass
 */
LiquidSlider.addArrows = function(arrowClass) {
  var _this = this,
    arrow = (_this.options.dynamicArrowsGraphical) ? "-arrow " : ' ';
  (_this.$sliderWrap).addClass("arrows");

  if (_this.options.dynamicArrowsGraphical) {
    _this.options.dynamicArrowLeftText = '';
    _this.options.dynamicArrowRightText = '';
  }

  // Build the arrows
  (_this.$sliderId).before('<div class="ls-nav-left' + arrow + (arrowClass || '') +
    '"><a href="#">' +
    _this.options.dynamicArrowLeftText + '</a></div>');
  (_this.$sliderId).after('<div class="ls-nav-right' + arrow + (arrowClass || '') +
    '"><a href="#">' +
    _this.options.dynamicArrowRightText + '</a></div>');

  _this.leftArrow = jQuery(_this.sliderId + '-wrapper [class^=ls-nav-left]')
    .css('visibility', "hidden").addClass('ls-hidden');
  _this.rightArrow = jQuery(_this.sliderId + '-wrapper [class^=ls-nav-right]')
    .css('visibility', "hidden").addClass('ls-hidden');
  if (!_this.options.hoverArrows) _this.hideShowArrows(undefined, true, true, false);
};

/**
 * Handles when arrows will show and whether
 * to hide both, show both, etc.
 * Also allows override of the fade speed
 *
 * @param <Number> speed
 * @param <Bool> forceVisibility
 * @param <Bool> showBoth
 * @param <Bool> hideBoth
 */
LiquidSlider.hideShowArrows = function(speed, forceVisibility, showBoth, hideBoth) {
  var _this = this,
    fadeOut = (typeof speed !== 'undefined') ? speed : _this.options.fadeOutDuration,
    fadeIn = (typeof speed !== 'undefined') ? speed : _this.options.fadeInDuration,
    visibility = forceVisibility ? "visible" : "hidden";

  if (!showBoth && (hideBoth || (_this.sanitizeNumber(_this.nextPanel) === 1))) {
    _this.leftArrow.stop().fadeTo(fadeOut, 0, function() {
      jQuery(this).css('visibility', visibility).addClass('ls-hidden');
    });
  } else if (showBoth || _this.leftArrow.hasClass('ls-hidden')) {
    _this.leftArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
  }
  if (!showBoth && (hideBoth || (_this.sanitizeNumber(_this.nextPanel) === _this.panelCount))) {
    _this.rightArrow.stop().fadeTo(fadeOut, 0, function() {
      jQuery(this).css('visibility', visibility).addClass('ls-hidden');
    });
  } else if (showBoth || _this.rightArrow.hasClass('ls-hidden')) {
    _this.rightArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
  }
};

LiquidSlider.registerArrows = function() {
  var _this = this;

  jQuery((_this.$sliderWrap).find('[class^=ls-nav-]')).on('click', function(e) {
    e.preventDefault();
    _this.setNextPanel(jQuery(this).attr('class').split(' ')[0].split('-')[2]);
  });
};

/**
 * Provides options for adjusting the height,
 * including the ability to use different easing,
 * speed and height.
 *
 * @param <Number> noAnimation
 * @param <Bool> height
 * @param <Bool> easing
 * @param <Bool> duration
 */
LiquidSlider.adjustHeight = function(noAnimation, height, easing, duration) {
  var _this = this;

  if (noAnimation || _this.useCSS) {
    noAnimation && _this.configureCSSTransitions('0', '0');
    (_this.$sliderId).height(height);
    noAnimation && _this.configureCSSTransitions();
    return;
  }
  (_this.$sliderId).animate({
    'height': height + 'px'
  }, {
    easing: jQuery.easing.hasOwnProperty(easing || _this.options.heightEaseFunction) ? easing || _this.options.heightEaseFunction : _this.options.slideEaseFunctionFallback,
    duration: duration || _this.options.heightEaseDuration,
    queue: false
  });
};

LiquidSlider.autoSlide = function() {
  var _this = this;

  // Can't set the autoSlide slower than the easing ;-)
  if (_this.options.autoSlideInterval < _this.options.slideEaseDuration) {
    _this.options.autoSlideInterval =
      (_this.options.slideEaseDuration > _this.options.heightEaseDuration) ?
      _this.options.slideEaseDuration : _this.options.heightEaseDuration;
  }

  // Only run the autoslide if the tab is in focus
  _this.autoSlideTimeout = !document.hasFocus() ? undefined : setTimeout(function() {

    // Slide left or right
    _this.setNextPanel(_this.options.autoSlideDirection);
    _this.autoSlide();
  }, _this.options.autoSlideInterval);

  // Register a focus and blur event to reset autoslide
  jQuery(window).on('focus', function() {
      _this.startAutoSlide(true);
  });
  jQuery(window).on('blur', function() {
      _this.stopAutoSlide();
  });
};

LiquidSlider.stopAutoSlide = function() {
  var _this = this;

  _this.options.autoSlide = false;
  clearTimeout(_this.autoSlideTimeout);
};

/**
 * Starts the autoslide. reset will keep from
 * too many timers running
 *
 * @param <Bool> reset
 */
LiquidSlider.startAutoSlide = function(reset) {
  var _this = this;

  _this.options.autoSlide = true;
  reset || _this.setNextPanel(_this.options.autoSlideDirection);
  _this.autoSlide(clearTimeout(_this.autoSlideTimeout));
};

LiquidSlider.buildHashTags = function() {
  var _this = this;

  _this.hashLinks = [];
  jQuery(_this.panelClass + ' ' + _this.options.hashTitleSelector).each(function() {
    _this.hashLinks.push(_this.convertRegex($(this).text()));
  });
};

LiquidSlider.updateHashTags = function() {
  var _this = this;

  window.location.hash = _this.hashLinks[_this.sanitizeNumber(_this.nextPanel) -1];
};

LiquidSlider.registerKeyboard = function() {
  var _this = this;

  jQuery(document).keydown(function(event) {
    var key = event.keyCode || event.which;
    if (event.target.type !== 'textarea' && event.target.type !== 'textbox') {

      // Off the autoSlider
      _this.options.forceAutoSlide      || jQuery(this).trigger('click');
      (key === _this.options.leftKey)   && _this.setNextPanel('right');
      (key === _this.options.rightKey)  && _this.setNextPanel('left');

      // Set each panel key
      jQuery.each(_this.options.panelKeys, function(index, value) {
        (key === value) && _this.setNextPanel(index - 1);
      });
    }
  });
};

LiquidSlider.addPreloader = function() {
  var _this = this;

  jQuery(_this.sliderId + '-wrapper').append('<div class="ls-preloader"></div>');
};

LiquidSlider.removePreloader = function() {
  var _this = this;

  jQuery(_this.sliderId + '-wrapper .ls-preloader').fadeTo('slow', 0, function() {
    jQuery(this).remove();
  });
};

LiquidSlider.makeResponsive = function() {
  var _this = this;

  // Adjust widths and add classes to make responsive
  jQuery(_this.sliderId + '-wrapper').addClass('ls-responsive').css({
    'max-width': jQuery(_this.sliderId + ' .ls-panel:first-child').width(),
    'width': '100%'
  });

  // Update widths
  jQuery(_this.sliderId + ' .panel-container').css('width', 100 * _this.panelCountTotal + _this.pSign);
  jQuery(_this.sliderId + ' .ls-panel').css('width', 100 / _this.panelCountTotal + _this.pSign);

  // convert to pixels
  jQuery(_this.sliderId + ' .ls-panel').css('width', jQuery(_this.sliderId).outerWidth(true));

  // Cache the padding for add/removing arrows
  if (_this.options.hideArrowsWhenMobile) {
    _this.leftWrapperPadding = jQuery(_this.sliderId + '-wrapper').css('padding-left');
    _this.rightWrapperPadding = (_this.$sliderWrap).css('padding-right');
  }

  // Set events and fire on browser resize
  _this.responsiveEvents();
  jQuery(window).bind('resize orientationchange', function() {
    _this.responsiveEvents();

    clearTimeout(_this.resizingTimeout);
    _this.resizingTimeout = setTimeout(function() {
      var height = (_this.options.autoHeight) ? _this.getHeight() : _this.getHeighestPanel(_this.nextPanel);
      _this.adjustHeight(false, height);
      // convert to pixels
      jQuery(_this.sliderId + ' .ls-panel').css('width', jQuery(_this.sliderId).outerWidth(true));
    }, 500);
  });
};

LiquidSlider.responsiveEvents = function() {
  var _this = this,
    mobileNavChangeOver = (_this.options.hideArrowsThreshold ||
      _this.options.mobileUIThreshold ||
      (_this.totalNavWidth + 10));

  // Test the width while resixing
  if ((_this.$sliderId).outerWidth() < mobileNavChangeOver) {
    if (_this.options.mobileNavigation) {
      (_this.navigation).css('display', 'none');
      (_this.dropdown).css('display', 'block');
      (_this.dropdownSelect).css('display', 'block');

      // Update the navigation
      jQuery(_this.sliderId + '-nav-select').val(_this.options.mobileNavDefaultText);
    }
    if (_this.options.dynamicArrows) {
      if (_this.options.hideArrowsWhenMobile) {
        (_this.leftArrow).remove().length = 0;
        (_this.rightArrow).remove().length = 0;
      } else if (!_this.options.dynamicArrowsGraphical) {

        // If using text arrows, let's move them to the top
        (_this.leftArrow).css('margin-' + _this.options.dynamicTabsPosition, '0');
        (_this.rightArrow).css('margin-' + _this.options.dynamicTabsPosition, '0');
      }
    }
  } else {
    if (_this.options.mobileNavigation) {
      (_this.navigation).css('display', 'block');
      (_this.dropdown).css('display', 'none');
      (_this.dropdownSelect).css('display', 'none');
    }
    if (_this.options.dynamicArrows) {
      if (_this.options.hideArrowsWhenMobile &&
        (!(_this.leftArrow).length || !(_this.rightArrow).length)) {
        _this.addArrows();
        _this.registerArrows();
      } else if (!_this.options.dynamicArrowsGraphical && _this.options.mobileNavigation) {

        // Reposition the text arrows
        (_this.leftArrow).css('margin-' +
          _this.options.dynamicTabsPosition, (_this.navigation).css('height'));
        (_this.rightArrow).css('margin-' +
          _this.options.dynamicTabsPosition, (_this.navigation).css('height'));
      }
    }
  }

  // While resizing, set the width to 100%
  jQuery(_this.sliderId + '-wrapper').css('width', '100%');
  _this.loaded && jQuery(_this.sliderId + ' .ls-panel').width(100 / _this.panelCountTotal + _this.pSign);

  // Update when the select box changes
  _this.options.mobileNavigation &&
    (_this.dropdownSelect).change(function() {
      _this.setNextPanel(parseInt(jQuery(this).val().split('tab')[1], 10) - 1);
    });
};

LiquidSlider.registerTouch = function() {
  var _this = this,
  args = _this.options.swipeArgs || {
    fallbackToMouseEvents: false,
    allowPageScroll: 'vertical',
    swipe: function(e, dir) {
      if (dir === 'up' || dir === 'down') return false;

      // Reverse the swipe direction
      _this.swipeDir = (dir === 'left') ? 'right' : 'left';
      _this.setNextPanel(_this.swipeDir);
    }};
  jQuery(_this.sliderId + ' .ls-panel').swipe(args);
};
