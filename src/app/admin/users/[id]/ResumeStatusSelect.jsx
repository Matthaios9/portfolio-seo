"use client"
import React, { useState } from "react";
import axios from "axios";
import { Select } from "@radix-ui/themes";
import toast, { Toaster } from "react-hot-toast";

const statuses = [
    { label: 'No', value: 'NO' },
    { label: 'Yes', value: 'YES' },
    { label: 'Approved', value: 'APPROVED' },
    { label: 'Denied', value: 'DENIED' },
];
const ResumeStatusSelect = ({ userId, status }) => {
    const [isLoading, setIsLoading] = useState(false);

    const assignStatus = (status) => {
        console.log("status: " + status);
        setIsLoading(true)
        axios.patch("/api/resume/" + userId, {
            status: status || null
        }).then((response) => {
            if (response.status === 200) { }
            toast.success("Request updated successfully")
            setIsLoading(false)
        })
            .catch(() => {
                setIsLoading(false)
                toast.error("Change could not be saved.")
            })
    }



    return <>
        <Select.Root
            defaultValue={status}
            onValueChange={assignStatus}
        >
            <Select.Trigger placeholder="Assign..." />
            <Select.Content>
                {statuses.map((status, index) => (
                    <Select.Item
                        key={index}
                        value={status.value || ''}
                    >
                        {status.label}
                    </Select.Item>
                ))}
            </Select.Content>
        </Select.Root>
        {isLoading && <p>Updating Please wait...</p>}
        <Toaster />

    </>;
};

export default ResumeStatusSelect;
