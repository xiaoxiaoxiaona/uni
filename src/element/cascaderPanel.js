export default {
  init: function ($, componentName, i18nName) {
    if ($.fn[componentName]) return;

    function CascaderPanel ($el, options) {
      this.$el = $el;
      this.options = options;
    }

    CascaderPanel.prototype = {
      constructor: CascaderPanel,
      init: function () {
        const options = this.options;
        if ((options.multiple || options.emitPath) && !Array.isArray(options.value)) {
          options.value = [];
        }
        this.$cascaderPanel = $('<div class="el-cascader-panel' + (options.border ? ' is-bordered' : '') + '"></div>');
        this.setData();
        this.$el.css('display', 'flex');
        this.$el.append(this.$cascaderPanel);
      },
      setData: function () {
        const that = this, options = this.options, data = this.options.data;
        const firstPanel = this.panelHtml();
        this.$cascaderPanel.append(firstPanel.menu);
        if (data.length === 0) {
          firstPanel.list.addClass('is-empty').append(this.noDataHtml());
          return;
        }
        data.forEach(function (_option) {
          _option[options.labelKey] = _option[options.labelKey] || _option[options.valueKey];
          firstPanel.list.append(that.optionHtml(_option));
        });
      },
      panelHtml: function () {
        const menu = $('<div class="el-cascader-menu" role="menu" style="overflow:auto;"></div>');
        const wrap = $('<div class="el-cascader-menu__wrap"></div>');
        const list = $('<ul class="el-cascader-menu__list"></ul>');
        menu.append(wrap.append(list));
        return {menu: menu, wrap: wrap, list: list};
      },
      noDataHtml: function () {
        const _nodata = typeof this.options.noDataText === 'function' ? this.options.noDataText() : this.options.noDataText;
        return $('<div class="el-cascader-menu__empty-text">' + _nodata + '</div>');
      },
      optionHtml: function (_option) {
        if (this.options.multiple) {
          return this.optionHtmlMultiple(_option, []);
        } else if (this.options.checkStrictly) {
          return this.optionHtmlSingle(_option, []);
        } else {
          return this.optionHtmlNormal(_option, []);
        }
      },
      optionHtmlNormal: function (_option, parent) {
        var that = this, options = this.options;
        var $li = $('<li role="menuitem" class="el-cascader-node"></li>');
        var $label = $('<span class="el-cascader-node__label"></span>');
        var $text = typeof options.optionTemplate === 'function' ? options.optionTemplate(_option) : _option[options.labelKey];
        $li.append($label.append($text));
        if (!_option[options.leafKey] && _option.children) {
          $li.append('<i class="el-icon-arrow-right el-cascader-node__postfix"></i>');
          $li.on(options.expandTrigger === 'hover' ? 'hover' : 'click', function () {
            $li.siblings('.el-cascader-node').removeClass('in-active-path');
            $li.addClass('in-active-path');
            $li.parents('.el-cascader-menu').eq(0).nextAll('.el-cascader-menu').remove();
            var $panel = that.panelHtml();
            if (_option.children.length) {
              _option.children.forEach(function (c_option) {
                c_option[options.labelKey] = c_option[options.labelKey] || c_option[options.valueKey];
                $panel.list.append(that.optionHtmlNormal(c_option, [].concat(parent, _option[options.valueKey])));
              });
            } else {
              $panel.list.addClass('is-empty').append(that.noDataHtml());
            }
            $li.parents('.el-cascader-panel').eq(0).append($panel.menu);
          });
        } else {
          if (options.emitPath ? options.value[options.value.length - 1] === _option[options.valueKey] : options.value === _option[options.valueKey]) {
            $li.addClass('is-active');
            $li.prepend('<i class="el-icon-check el-cascader-node__prefix"></i>');
          }
          $li.click(function () {
            that.$cascaderPanel.find('.el-icon-check').remove();
            that.$cascaderPanel.find('.is-active').removeClass('is-active');
            $li.addClass('is-active');
            $li.prepend('<i class="el-icon-check el-cascader-node__prefix"></i>');
            that.set(options.emitPath ? [].concat(parent, _option[options.valueKey]) : _option[options.valueKey]);
          });
        }
        return $li;
      },
      optionHtmlSingle: function (_option, parent) {
        var that = this, options = this.options;
        var pathValue = [].concat(parent, _option[options.valueKey]);
        var $li = $('<li role="menuitem" class="el-cascader-node is-selectable"></li>');
        var $radio = $('<label role="radio" tabindex="0" class="el-radio">' +
          '  <span class="el-radio__input">' +
          '    <span class="el-radio__inner"></span>' +
          '    <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original" value="' + pathValue.join(',') + '">' +
          '  </span>' +
          '</label>');
        if (options.value.join(',') === pathValue.join(',')) {
          $radio.addClass('is-checked').attr('aria-checked', true);
          $radio.find('.el-radio__input').addClass('is-checked');
        }
        $radio.on('click', function () {
          if (options.value.join(',') !== pathValue.join(',')) {
            that.$cascaderPanel.find('.is-checked').removeClass('is-checked');
            that.$cascaderPanel.find('.is-active').removeClass('is-active');
            that.$cascaderPanel.find('.in-checked-path').removeClass('in-checked-path');
            for (var _i = 1, _len = parent.length; _i <= _len; _i++) {
              that.$cascaderPanel.find('input[value="' + parent.slice(0, _i).join(',') + '"]').parents('.el-cascader-node').eq(0).addClass('in-checked-path');
            }
            $li.addClass('is-active');
            $radio.addClass('is-checked').attr('aria-checked', true);
            $radio.find('.el-radio__input').addClass('is-checked');
            that.set(pathValue);
          }
        });
        var $label = $('<span class="el-cascader-node__label"></span>');
        var $text = typeof options.optionTemplate === 'function' ? options.optionTemplate(_option) : _option[options.labelKey];
        $li.prepend($radio);
        $li.append($label.append($text));
        if (!_option[options.leafKey] && _option.children) {
          if (options.value.join(',').indexOf(pathValue.join(',')) === 0) {
            $li.addClass('in-checked-path');
          }
          $li.append('<i class="el-icon-arrow-right el-cascader-node__postfix"></i>');
          $li.on(options.expandTrigger === 'hover' ? 'hover' : 'click', function () {
            $li.siblings('.el-cascader-node').removeClass('in-active-path');
            $li.addClass('in-active-path');
            $li.parents('.el-cascader-menu').eq(0).nextAll('.el-cascader-menu').remove();
            var $panel = that.panelHtml();
            if (_option.children.length) {
              _option.children.forEach(function (c_option) {
                c_option[options.labelKey] = c_option[options.labelKey] || c_option[options.valueKey];
                $panel.list.append(that.optionHtmlSingle(c_option, pathValue));
              });
            } else {
              $panel.list.addClass('is-empty').append(that.noDataHtml());
            }
            $li.parents('.el-cascader-panel').eq(0).append($panel.menu);
          });
        }
        return $li;
      },
      optionHtmlMultiple: function (_option, parent) {
        var that = this, options = this.options;
        var pathValue = [].concat(parent, _option[options.valueKey]);
        var $li = $('<li role="menuitem" class="el-cascader-node is-selectable"></li>');
        var $checkbox = $('<label role="checkbox" class="el-checkbox">' +
          '  <span aria-checked="mixed" class="el-checkbox__input">' +
          '    <span class="el-checkbox__inner"></span>' +
          '    <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">' +
          '  </span>' +
          '</label>');
        if (options.value.join(',') === pathValue.join(',')) {
          $radio.addClass('is-checked').attr('aria-checked', true);
          $radio.find('.el-radio__input').addClass('is-checked');
        }
        $radio.on('click', function () {
          if (options.value.join(',') !== pathValue.join(',')) {
            that.$cascaderPanel.find('.is-checked').removeClass('is-checked');
            that.$cascaderPanel.find('.is-active').removeClass('is-active');
            that.$cascaderPanel.find('.in-checked-path').removeClass('in-checked-path');
            for (var _i = 1, _len = parent.length; _i <= _len; _i++) {
              that.$cascaderPanel.find('input[value="' + parent.slice(0, _i).join(',') + '"]').parents('.el-cascader-node').eq(0).addClass('in-checked-path');
            }
            $li.addClass('is-active');
            $radio.addClass('is-checked').attr('aria-checked', true);
            $radio.find('.el-radio__input').addClass('is-checked');
            that.set(pathValue);
          }
        });
        var $label = $('<span class="el-cascader-node__label"></span>');
        var $text = typeof options.optionTemplate === 'function' ? options.optionTemplate(_option) : _option[options.labelKey];
        $li.prepend($radio);
        $li.append($label.append($text));
        if (!_option[options.leafKey] && _option.children) {
          if (options.value.join(',').indexOf(pathValue.join(',')) === 0) {
            $li.addClass('in-checked-path');
          }
          $li.append('<i class="el-icon-arrow-right el-cascader-node__postfix"></i>');
          $li.on(options.expandTrigger === 'hover' ? 'hover' : 'click', function () {
            $li.siblings('.el-cascader-node').removeClass('in-active-path');
            $li.addClass('in-active-path');
            $li.parents('.el-cascader-menu').eq(0).nextAll('.el-cascader-menu').remove();
            var $panel = that.panelHtml();
            if (_option.children.length) {
              _option.children.forEach(function (c_option) {
                c_option[options.labelKey] = c_option[options.labelKey] || c_option[options.valueKey];
                $panel.list.append(that.optionHtmlSingle(c_option, pathValue));
              });
            } else {
              $panel.list.addClass('is-empty').append(that.noDataHtml());
            }
            $li.parents('.el-cascader-panel').eq(0).append($panel.menu);
          });
        }
        return $li;
      },
      setHover: function ($li) {
        if (!$li || $li.length === 0 || $li.hasClass('is-disabled')) return;
        this.$dropdownList.find('.el-select-dropdown__item').removeClass('hover');
        $li.addClass('hover');
      },
      navigateOptions: function (direction) {
        var $li = this.$dropdownList.find('.el-select-dropdown__item.hover');
        var $selects = this.$dropdownList.find('.el-select-dropdown__item:visible').not('.is-disabled');
        if ($li.length === 0) {
          this.setHover($selects.first());
          return;
        }
        var index = $selects.index($li);
        if (direction === 'prev') {
          if (index === -1 || index === 0) {
            this.setHover($selects.last());
          } else {
            this.setHover($selects.eq(index - 1));
          }
        } else {
          if (index === -1 || index === ($selects.length - 1)) {
            this.setHover($selects.first());
          } else {
            this.setHover($selects.eq(index + 1));
          }
        }
      },
      set: function (value) {
        this.options.value = value;
      },
      get: function () {
        return this.options.value;
      }
    };
    $.fn[componentName] = function () {
      var option = arguments[0],
        args = arguments,
        value,
        allowedMethods = ['set', 'get'];
      this.each(function () {
        var $this = $(this),
          data = $this.data('u-cascaderPanel');
        if (!data) {
          if (Array.isArray(option)) {
            option = {data: option};
          }
          var options = $.extend({}, $.fn[componentName].defaults,
            $this.data(), typeof option === 'object' && option);
          data = new CascaderPanel($this, options);
          $this.data('u-cascaderPanel', data);
          data.init();
        }
        if (typeof option === 'string') {
          if ($.inArray(option, allowedMethods) < 0) {
            throw 'Unknown method: ' + option;
          }
          value = data[option](args[1]);
        }
      });
      return typeof value !== 'undefined' ? value : this;
    };
    $.fn[componentName].defaults = {
      'value': '',
      'data': [],
      'expandTrigger': 'click',
      'multiple': false,
      'checkStrictly': false,
      'emitPath': true,
      'optionTemplate': '',
      'valueKey': 'value',
      'labelKey': 'label',
      'childrenKey': 'children',
      'disabledKey': 'disabled',
      'leafKey': 'leaf',
      'border': true,
      'change': '',
      'expandChange': '',
      'noDataText': $[i18nName] ? function () {
        return $[i18nName].prop(this.i18n.noData, '暂无数据');
      } : '暂无数据',
      'i18n': {
        noData: 'uCascaderNoData'
      }
    };
  },
  componentName: 'cascaderPanel'
};