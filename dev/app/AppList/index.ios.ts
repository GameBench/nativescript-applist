// The MIT License (MIT)
// 
// Copyright (c) Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.


import AppListCommons = require('./index');


/**
 * Returns the list of installed apps.
 * 
 * @function getInstalledApps
 * 
 * @param {Function} callback The result callback.
 * @param {IGetInstalledAppsConfig} [cfg] The custom configuration options.
 */
export function getInstalledApps(callback: (result: AppListCommons.IGetInstalledAppsResult) => void,
                                 cfg?: AppListCommons.IGetInstalledAppsConfig) {
    
    if (!cfg) {
        cfg = {};
    }
    
    // TODO
    
    var apps : AppListCommons.IInstalledApp[] = [];

    callback({
        apps: apps
    });
}
