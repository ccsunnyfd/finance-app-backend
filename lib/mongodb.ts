//@ts-ignore
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

let clientPromise

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local')
}

// if (process.env.NODE_ENV === 'development') {
//     // In development mode, use a global variable so that the value
//     // is preserved across module reloads caused by HMR (Hot Module Replacement).
//     if (!global._mongooseClientPromise) {
//         global._mongoClientPromise = mongoose.connect(uri)
//     }
//     clientPromise = global._mongoClientPromise
// } else {
// In production mode, it's best to not use a global variable.
try {
    clientPromise = await mongoose.connect(uri)
    console.log('DB connected')
    // }
} catch (error) {
    console.log('There was an error connection to the DB', error)
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise