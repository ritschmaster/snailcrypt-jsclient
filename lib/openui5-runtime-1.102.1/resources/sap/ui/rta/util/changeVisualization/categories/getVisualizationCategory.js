/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/util/changeVisualization/categories/RenameVisualization","sap/ui/rta/util/changeVisualization/categories/MoveVisualization","sap/ui/rta/util/changeVisualization/categories/SplitVisualization"],function(R,M,S){"use strict";var c={rename:R,move:M,split:S};return function(C){return c[C];};});
