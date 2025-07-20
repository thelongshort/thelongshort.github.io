
"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    TrendingUp,
    Target,
    BarChart3,
    Building2,
    Activity,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function InstitutionalAIChat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                setValue("");
                adjustHeight(true);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Your AI-Powered Hedge Fund Intelligence
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Get instant insights on fund strategies, market positioning, risk analysis, and alpha opportunities
                </p>
            </div>

            <div className="w-full">
                <div className="relative bg-gradient-glass backdrop-blur-sm rounded-2xl border border-accent-purple/30 shadow-glass">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about hedge fund strategies, performance analysis, risk metrics..."
                            className={cn(
                                "w-full px-4 py-3",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-white text-sm",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-accent-cyan/50 placeholder:text-sm",
                                "min-h-[60px]"
                            )}
                            style={{
                                overflow: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="group p-2 hover:bg-accent-purple/20 rounded-lg transition-colors flex items-center gap-1"
                            >
                                <Paperclip className="w-4 h-4 text-accent-cyan" />
                                <span className="text-xs text-accent-cyan/70 hidden group-hover:inline transition-opacity">
                                    Attach
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="px-2 py-1 rounded-lg text-sm text-accent-cyan/70 transition-colors border border-dashed border-accent-cyan/30 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 flex items-center justify-between gap-1"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Strategies
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-accent-cyan/30 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 flex items-center justify-between gap-1",
                                    value.trim()
                                        ? "bg-gradient-button text-white hover:bg-gradient-accent"
                                        : "text-accent-cyan/70"
                                )}
                            >
                                <ArrowUpIcon
                                    className={cn(
                                        "w-4 h-4",
                                        value.trim()
                                            ? "text-white"
                                            : "text-accent-cyan/70"
                                    )}
                                />
                                <span className="sr-only">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
                    <ActionButton
                        icon={<TrendingUp className="w-4 h-4" />}
                        label="Strategy Analysis"
                    />
                    <ActionButton
                        icon={<Target className="w-4 h-4" />}
                        label="Position Tracking"
                    />
                    <ActionButton
                        icon={<BarChart3 className="w-4 h-4" />}
                        label="Risk Assessment"
                    />
                    <ActionButton
                        icon={<Building2 className="w-4 h-4" />}
                        label="Alpha Discovery"
                    />
                    <ActionButton
                        icon={<Activity className="w-4 h-4" />}
                        label="Market Intelligence"
                    />
                </div>
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    return (
        <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-glass backdrop-blur-sm hover:bg-gradient-accent/20 rounded-full border border-accent-purple/30 text-accent-cyan/70 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
        >
            {icon}
            <span className="text-xs">{label}</span>
        </button>
    );
}
