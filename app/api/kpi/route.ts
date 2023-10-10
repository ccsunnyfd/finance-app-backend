//@ts-ignore
import clientPromise from '../../../lib/mongodb'
import kpi from '../../kpi/models/kpi.js'
import { NextRequest, NextResponse } from 'next/server.js';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        //@ts-ignore
        await clientPromise
        const kpiRes = await kpi.find()
        return NextResponse.json(kpiRes)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error,
        }, {
            status: 404,
        })
    }
}