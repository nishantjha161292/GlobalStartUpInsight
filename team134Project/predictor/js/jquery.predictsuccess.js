/*!
 * Startup Success Predictor
 */
;(function ($, window, document, undefined) {

  "use strict";

  var FUNDING_ROUND = {
	'Angel': 1,
    'Seed': 1.2,
    'A': 1.4,
    'B': 1.6,
    'C': 2
  };

  var STATUS = {
    'development'   : 0.3,
    'alpha' : 0.4,
    'beta'  : 0.5,
	'live'   : 0.7,
    'operating' : 0.8,
    'private'  : 1,
	'ipo' : 1,
	'acquired' : 1,
    'closed'  : 0
  };

  var MINIMUM_FUNDING = 10000;
  var MINIMUM_YEARS = 1;

  var defaults = {
    // default values for a startup
    fundingAmount       : 20000,
    yearsPresent     : 2,
    fundingRounds      : FUNDING_ROUND,
    fundingRound      : 'Angel',
    startupStatus : 'beta',

    // inputs
    fundingAmountSelector       : '#funding-amount',
    yearsPresentSelector     : '#years-present',
    fundingRoundSelector      : '#funding-round',
    startupStatusSelector : '#startup-status',

    // display selected values
    selectedAmount           : '#selected-amount',
    selectedYears         : '#selected-years',
    selectedRound            : '#selected-round',
    selectedstartupStatus : '#selected-startup-status',

    // display the results
    SuccessSelector       : '#success-prediction'
  };


  function Plugin(element, options) {
    this.$el       = $(element);
    this._name     = 'startupPredictor';
    this._defaults = defaults;
    this.settings  = $.extend({}, defaults, options);
    this.attachListeners();
    this.init();
  }

  $.extend(Plugin.prototype, {

    init: function () {
      this.validate();
      this.render();
    },

    attachListeners: function () {
      var eventEmitters = [
        this.settings.fundingAmountSelector,
        this.settings.yearsPresentSelector,
        this.settings.fundingRoundSelector,
        this.settings.startupStatusSelector
      ];

      $(eventEmitters.join()).on({
        change    : this.eventHandler.bind(this),
        mousemove : this.eventHandler.bind(this),
        touchmove : this.eventHandler.bind(this)
      });
    },

    eventHandler: function () {
      this.update({
        fundingAmount       : this.$el.find(this.settings.fundingAmountSelector).val(),
        yearsPresent     : this.$el.find(this.settings.yearsPresentSelector).val(),
        fundingRound      : this.$el.find(this.settings.fundingRoundSelector).val(),
        startupStatus : this.$el.find(this.settings.startupStatusSelector).val()
      });
    },

    /**
     * Sanitize and validate the user input data.
     * @throws Error
     * @return {void}
     */
    validate: function () {
      if (typeof this.settings.fundingAmount === 'string') {
        this.settings.fundingAmount = this._toNumeric(this.settings.fundingAmount);
      }

      if (! $.isPlainObject(this.settings.fundingRounds)) {
        throw new Error('The value provided for [fundingRounds] is not valid.');
      }

      for (var fundRound in this.settings.fundingRounds) {
        if (typeof this.settings.fundingRounds[fundRound] === 'string') {
          this.settings.fundingRounds[fundRound] = this._toNumeric(this.settings.fundingRounds[fundRound])
        }

        if (! $.isNumeric(this.settings.fundingRounds[fundRound])) {
          throw new Error('The value provided for [fundingRounds] is not valid.')
        }
      }

      // Sanitize the input

      if (! STATUS.hasOwnProperty(this.settings.startupStatus)) {
        throw new Error('The value provided for [startupStatus] is not valid.');
      }

      if (! this.settings.fundingRounds.hasOwnProperty(this.settings.fundingRound)) {
        throw new Error('The value provided for [fundingRound] is not valid.');
      }

      if (this.settings.fundingAmount < MINIMUM_FUNDING) {
        throw new Error('The value provided for [fundingAmount] must me at least 1000.');
      }

      if (this.settings.yearsPresent < MINIMUM_YEARS) {
        throw new Error('The value provided for [yearsPresent] must me at least 1.');
      }

    },

    /**
     * Show the results in the DOM.
     * @return {void}
     */
    render: function () {
      this._displaySelectedValues();
      this._displayResults();
    },

    /**
     * Show the selected values in the DOM.
     * @return {void}
     */
    _displaySelectedValues: function () {
      // Display the selected startup amount
      this.$el.find(this.settings.selectedAmount).html(
        this._toMoney(this.settings.fundingAmount)
      );

      // Display the selected startup duration
      this.$el.find(this.settings.selectedYears).html(
        this.settings.yearsPresent + " years"
      );

      // Display the selected round score
      this.$el.find(this.settings.selectedRound).html(
        this.settings.fundingRound
      );

      // Display the selected payment frequency
      this.$el.find(this.settings.selectedstartupStatus).html(
        this.settings.startupStatus
      );
    },

    /**
     * Display the results for the current values.
     * @return {void}
     */
    _displayResults: function () {
      // Display the startup total
      this.$el.find(this.settings.SuccessSelector).html(
        this._toPercentage(this._successTotal())
      );
    },

    update: function (args) {
      this.settings = $.extend({}, this._defaults, this.settings, args);
      this.init();
      this.$el.trigger('startup:update');
    },

    _successTotal: function () {
	  var reg = -6.2805860698404 +(7.0705892859749*FUNDING_ROUND[this.settings.fundingRound])+(-0.0000000017488*this.settings.fundingAmount)+(0.0003573039645*365*this.settings.yearsPresent)
      return (Math.exp(reg)/(Math.exp(reg)+1))*STATUS[this.settings.startupStatus];
    },

    _toMoney: function (numeric) {
      if (typeof numeric == 'string') {
        numeric = parseFloat(numeric);
      }

      return '$' + numeric.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },

    _toNumeric: function (value) {
      return parseFloat(
        value.toString().replace(/[^0-9\.]+/g, '')
      );
    },

    _toPercentage: function (numeric) {
      return (numeric * 100).toFixed(2) + '%';
    }

  });

  /**
   * Wrapper around the constructor to prevent multiple instantiations.
   */
  $.fn.startupPredictor = function (options, args) {

    if (options === 'rates') {
      return this.data('plugin_startupPredictor').fundingRounds();
    }

    return this.each(function () {
      var instance = $.data(this, 'plugin_startupPredictor');
      if (! instance) {
        $.data(this, 'plugin_startupPredictor', new Plugin(this, options));
      }
      else if (options === 'update') {
        return instance.update(args);
      }
    });
  };

})(jQuery, window, document);
