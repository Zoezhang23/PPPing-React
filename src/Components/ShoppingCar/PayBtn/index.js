import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PayBtn() {
    const navigate = useNavigate();

    return (
        <button className="btn-area" onClick={() => navigate('/home')}>To pay</button>
    )
}
