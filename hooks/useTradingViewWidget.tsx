'use client';
import { useEffect, useRef } from 'react'
export interface TradingViewWidgetProps {
    title?: string;
    scriptUrl?: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}
const useTradingViewWidget = ({ scriptUrl, config, height = 600}: TradingViewWidgetProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
            if(!containerRef.current) return;
            if(containerRef.current.dataset.loaded) return;
            containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="height: ${height}px; width: 100%;"></div>`;

            const script = document.createElement("script");
            script.src = scriptUrl || "";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = JSON.stringify(config);
            containerRef.current.appendChild(script);
            containerRef.current.dataset.loaded = "true";
            return () => { //cleanup function to remove the script and widget
                if (containerRef.current) {
                    containerRef.current.innerHTML = "";
                    delete containerRef.current.dataset.loaded;
                }
            };
        }, [scriptUrl, config, height]
    );
    return containerRef;
}
export default useTradingViewWidget
