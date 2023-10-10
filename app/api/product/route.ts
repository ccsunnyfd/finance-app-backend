//@ts-ignore
import clientPromise from '../../../lib/mongodb'
import product from '../../product/models/product'
import { NextRequest, NextResponse } from 'next/server.js';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        //@ts-ignore
        await clientPromise
        const productRes = await product.find()
        return NextResponse.json(productRes)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error,
        }, {
            status: 404,
        })
    }
}