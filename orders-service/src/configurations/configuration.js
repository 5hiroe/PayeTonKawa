/**
 * TODO : Ajouter mongo
 */
import * as express from './express.js'

export async function configure (app) {
    await express.configure(app)
}

export default configure