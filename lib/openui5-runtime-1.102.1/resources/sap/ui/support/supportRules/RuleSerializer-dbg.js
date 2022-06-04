/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"./util/EvalUtils"
], function (EvalUtils) {
		"use strict";

		return {
			serialize: function serializeRule(rule) {
				var replacer = function (key, value) {
					if (typeof value === "function") {
						return value.toString();
					} else {
						return value;
					}
				};

				var result = JSON.stringify(rule, replacer);
				return result;
			},
			deserialize: function (serializedRule, stringifyCheck) {
				var rule;

				if (typeof serializedRule === 'string') {
					rule = JSON.parse(serializedRule);
				} else {
					rule = serializedRule;
				}

				if (!stringifyCheck && rule.check !== undefined) {
					rule.check = EvalUtils.evalFunction(rule.check);
				}

				return rule;
			}
		};
	}, true);
