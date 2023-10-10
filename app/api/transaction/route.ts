//@ts-ignore
import clientPromise from '../../../lib/mongodb'
import transaction from '../../transaction/models/transaction'
import { NextRequest, NextResponse } from 'next/server.js';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        //@ts-ignore
        await clientPromise
        const transactionRes = await transaction.find()
        return NextResponse.json(transactionRes)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error,
        }, {
            status: 404,
        })
    }
}