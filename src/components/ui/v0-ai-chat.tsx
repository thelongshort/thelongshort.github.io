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
    DollarSign,
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
                    Your AI-Powered Allocations Intelligence
                </h2>
                <p className="text-accent-platinum text-lg max-w-2xl">
                    Get instant insights on institutional transactions, capital flow analysis, and portfolio allocation strategies
                </p>
            </div>

            <div className="w-full">
                <div className="relative bg-card/80 backdrop-blur-sm rounded-xl border border-accent-gold/30">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about institutional flows, asset allocation trends, manager selection..."
                            className={cn(
                                "w-full px-4 py-3",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-white text-sm",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-accent-gold/50 placeholder:text-sm",
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
                                className="group p-2 hover:bg-gray-800/50 rounded-lg transition-colors flex items-center gap-1"
                            >
                                <Paperclip className="w-4 h-4 text-accent-gold" />
                                <span className="text-xs text-accent-gold/70 hidden group-hover:inline transition-opacity">
                                    Attach
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="px-2 py-1 rounded-lg text-sm text-accent-gold/70 transition-colors border border-dashed border-accent-gold/30 hover:border-accent-gold/50 hover:bg-card/50 flex items-center justify-between gap-1"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Allocations
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-accent-gold/30 hover:border-accent-gold/50 hover:bg-card/50 flex items-center justify-between gap-1",
                                    value.trim()
                                        ? "bg-accent-gold text-accent-foreground hover:bg-accent-gold/90"
                                        : "text-accent-gold/70"
                                )}
                            >
                                <ArrowUpIcon
                                    className={cn(
                                        "w-4 h-4",
                                        value.trim()
                                            ? "text-accent-foreground"
                                            : "text-accent-gold/70"
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
                        label="Flow Analysis"
                    />
                    <ActionButton
                        icon={<Target className="w-4 h-4" />}
                        label="Asset Allocation"
                    />
                    <ActionButton
                        icon={<BarChart3 className="w-4 h-4" />}
                        label="Performance Analytics"
                    />
                    <ActionButton
                        icon={<Building2 className="w-4 h-4" />}
                        label="Manager Research"
                    />
                    <ActionButton
                        icon={<DollarSign className="w-4 h-4" />}
                        label="Capital Commitments"
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
            className="flex items-center gap-2 px-4 py-2 bg-card/50 hover:bg-card/70 rounded-full border border-accent-gold/30 text-accent-gold/70 hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-300"
        >
            {icon}
            <span className="text-xs">{label}</span>
        </button>
    );
}