"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
const TodoList = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div>
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow-sm"
                        captionLayout="dropdown"
                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="max-h-[400px] w-full mt-4 overflow-y-auto">
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>{" "}
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" />
                        <label htmlFor="item1" className="text-sm">
                            Lorem ipsum dolor sit amet consectetur .
                        </label>
                    </div>
                </Card>
            </ScrollArea>
        </div>
    );
};

export default TodoList;
