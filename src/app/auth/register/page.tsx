import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Register = () => {
    return (
        <div>
            <Card className="mx-auto max-w-[28rem]">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Sign up to APMS
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="First Name" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">Departments</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Departments" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="administrator">Administrator</SelectItem>
                                        <SelectItem value="production">Production</SelectItem>
                                        <SelectItem value="personnel">Personnel</SelectItem>
                                        <SelectItem value="corporate">Corporate</SelectItem>
                                        <SelectItem value="hr">HR</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">Locations</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Locations" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Seguin">Seguin</SelectItem>
                                        <SelectItem value="Conroe">Conroe</SelectItem>
                                        <SelectItem value="personnel">Gunter</SelectItem>

                                    </SelectContent>
                                </Select>

                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Confirm Password</Label>
                            <Input id="password" type="password" placeholder="Confirm Password" />
                        </div>
                        <Button type="submit" className="w-full">
                            Create an account
                        </Button>

                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <div className="text-center mt-4 text-sm">
                By registering you agree to the Ameritex
                <Link
                    href="#"
                    className="cursor-pointer text-blue-700 font-semibold hover:underline ml-1"
                >
                    Terms of Use
                </Link>
            </div>
        </div>
    )
}

export default Register
