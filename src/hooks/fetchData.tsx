"use server"
import axios from "axios"
import { useEffect, useState } from "react"

export default function() {
    const [data, setData] = useState({})
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async() => {
            try {
                const RESPONSE = await axios.get(``)
                setData(RESPONSE.data.json)
            } catch {
    
            } finally {
                
            }
            getData()
        }
    },[])

    return (
        <>
            
        </>
    )
}