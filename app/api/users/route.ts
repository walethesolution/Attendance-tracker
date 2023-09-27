// import connectToDB from "@/lib/db";
// import UserModel from "@/models/user";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// export default POST = async (request: NextApiRequest) => {
//     if (request.method === 'POST') {
//         const {name, role} = await request.body()
//         await connectToDB();
//         await UserModel.create({name, role});
//         return NextResponse.json({message: "User Created"}, {status: 201})
//     }
// }