'use client';
import React, { memo } from 'react';
import useTradingViewWidget, {TradingViewWidgetProps} from "@/hooks/useTradingViewWidget";
import {cn} from "@/lib/utils";
//{title, scriptUrl, config, height = 600, className}
const TradingViewWidget= (tradingViewConfig: TradingViewWidgetProps) => {
    const containerRef = useTradingViewWidget(tradingViewConfig);
    const {title, className, height}  = tradingViewConfig;
    return (
        <div >
            {title && <h3 className="font-semibold text-lg text-gray-100 mb-5">{title}</h3>}
            <div className={cn('tradingview-widget-container', className)} ref={containerRef}>
                <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
                <div className="tradingview-widget-copyright"></div>
            </div>
        </div>

);
}

export default memo(TradingViewWidget);
