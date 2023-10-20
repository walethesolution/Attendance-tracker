import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method == "POST") {
        const {name, role} = req.body;

        try {
            const newUser = await prisma.user.create({
                data: {
                    name: name, 
                    role: role
                }
            })
            res.status(201).json({message: `Successfully created new user, `, newUser})
        } catch (error) {
            console.error("Cannot create user")
            res.status(500).json({message: 'Unable to create user', error})
        }
    } else {
        res.status(500).json({message: 'Method not Allowed'})
    }
}