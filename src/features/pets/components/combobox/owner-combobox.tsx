'use client'
import { UserName } from "@/features/users/types/user.types";
import { Button } from "@/shared/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/shared/components/ui/command";
import { Input } from "@/shared/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { cn } from "@/shared/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export const OwnerCombobox = ({ users }: { users: UserName[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [ownerId, setOwnerId] = useState<string>("");

    const handleSelect = (currentValue: string, id: string) => {
        setValue(currentValue === value ? "" : currentValue);
        setOwnerId(id);
        setOpen(false);
    };

    return (
        <>
            <Input id="ownerId" value={ownerId} className="col-span-3" type="hidden" name="ownerId" required />

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="col-span-3 justify-between"
                    >
                        {value
                            ? users.find((user) => user.name === value)?.name
                            : "Selecciona un usuario..."}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="col-span-3 p-0">
                    <Command>
                        <CommandInput placeholder="Buscar un usuario..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>No usuarios encontrados.</CommandEmpty>
                            <CommandGroup>
                                {users.map((user) => (
                                    <CommandItem
                                        key={user._id}
                                        value={user.name}
                                        onSelect={(currentValue: string) => handleSelect(currentValue, user?._id)}
                                    >
                                        {user.name}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === user.name ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
}