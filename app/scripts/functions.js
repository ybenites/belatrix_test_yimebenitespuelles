/* eslint-disable camelcase */
import Zepto from 'zepto'
(function($) {
  // Used by dateinput
  $.expr = {
    ':': {}
  }

  // Used by bootstrap
  $.support = {}

  // Used by dateinput
  $.fn.clone = function() {
    var ret = $()
    this.each(function() {
      ret.push(this.cloneNode(true))
    })
    return ret
  };

  ['Left', 'Top'].forEach(function(name, i) {
    var method = 'scroll' + name

    function isWindow(obj) {
      return obj && typeof obj === 'object' && 'setInterval' in obj
    }

    function getWindow(elem) {
      return isWindow(elem) ?
        elem :
        elem.nodeType === 9 ?
        elem.defaultView || elem.parentWindow :
        false
    }

    $.fn[method] = function(val) {
      var elem,
        win

      if (val === undefined) {
        elem = this[0]

        if (!elem) {
          return null
        }

        win = getWindow(elem)

        // Return the scroll offset
        return win ?
          ('pageXOffset' in win) ?
          win[i ? 'pageYOffset' : 'pageXOffset'] :
          win.document.documentElement[method] || win.document.body[method] :
          elem[method]
      }

      // Set the scroll offset
      this.each(function() {
        win = getWindow(this)

        if (win) {
          var xCoord = !i ?
            val :
            $(win).scrollLeft()
          var yCoord = i ?
            val :
            $(win).scrollTop()
          win.scrollTo(xCoord, yCoord)
        } else {
          this[method] = val
        }
      })
    }
  });

  // Used by colorslider.js
  ['width', 'height'].forEach(function(dimension) {
    var Dimension = dimension.replace(/./, m => m[0].toUpperCase())
    $.fn['outer' + Dimension] = function(margin) {
      var elem = this
      if (elem) {
        var size = elem[dimension]()
        var sides = {
          'width': [
            'left', 'right'
          ],
          'height': ['top', 'bottom']
        }
        sides[dimension].forEach(function(side) {
          if (margin) size += parseInt(elem.css('margin-' + side), 10)
        })
        return size
      } else {
        return null
      }
    }
  })

  // Used by bootstrap
  $.proxy = function(fn, context) {
    if (typeof context === 'string') {
      var tmp = fn[context]
      context = fn
      fn = tmp
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!$.isFunction(fn)) {
      return undefined
    }

    // Simulated bind
    var args = Array.prototype.slice.call(arguments, 2)
    var proxy = function() {
      return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || proxy.guid || $.guid++

    return proxy
  }

  // Used by timeago
  var nativeTrim = String.prototype.trim
  $.trim = function(str, characters) {
    if (!characters && nativeTrim) {
      return nativeTrim.call(str)
    }
    characters = defaultToWhiteSpace(characters)
    return str.replace(new RegExp('^[' + characters + ']+|[' + characters + ']+$', 'g'), '')
  }

  // Used by util.js
  var rtable = /^t(?:able|d|h)$/i
  var rroot = /^(?:body|html)$/i
  $.fn.position = function() {
    if (!this[0]) {
      return null
    }

    var elem = this[0]

    // Get *real* offsetParent
    var offsetParent = this.offsetParent()
    // Get correct offsets
    var offset = this.offset()
    var parentOffset = rroot.test(offsetParent[0].nodeName) ? {
      top: 0,
      left: 0
    } : offsetParent.offset()

    // Subtract element margins
    // note: when an element has margin: auto the offsetLeft and marginLeft
    // are the same in Safari causing offset.left to incorrectly be 0
    offset.top -= parseFloat($(elem).css('margin-top')) || 0
    offset.left -= parseFloat($(elem).css('margin-left')) || 0

    // Add offsetParent borders
    parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0
    parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0

    // Subtract the two offsets
    return {
      top: offset.top - parentOffset.top,
      left: offset.left - parentOffset.left
    }
  }

  $.fn.offsetParent = function() {
    var ret = $()
    this.each(function() {
      var offsetParent = this.offsetParent || document.body
      while (offsetParent && (!rroot.test(offsetParent.nodeName) && $(offsetParent).css('position') === 'static')) {
        offsetParent = offsetParent.offsetParent
      }
      ret.push(offsetParent)
    })
    return ret
  }
})(Zepto)



var fbAppId = 748050775275737
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
// Additional JS functions here
window.fbAsyncInit = function() {
  FB.init({
    appId: fbAppId, // App ID
    status: true, // check login status
    cookie: true, // enable cookies to allow the
    // server to access the session
    xfbml: true, // parse page for xfbml or html5
    // social plugins like login button below
    version: 'v2.0' // Specify an API version
  })
  // Put additional init code here
};

// Load the SDK Asynchronously
(function(d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'facebook-jssdk');



(function($) {
  $.extend($.fn, {
    animateCss: function(animationName, type) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      var copy_this = this
      if (type !== undefined) {
        if (type === 'in') {
          d3.timeout(function() {
            copy_this.removeClass('none')
          }, 100)
        }
      }
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        copy_this.off()
        if (type === 'out') copy_this.addClass('none')
        copy_this.removeClass('animated ' + animationName)
      })
    }
  })
})(Zepto);

// $.fn.extend({
//   animateCss: function(animationName, type) {
//
//   }
// })