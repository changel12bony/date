import React, { useEffect, useState } from 'react'
import './View.css';
import data from './data.json'
import { IUser } from './type';
interface IProps {
    onAdd: (data: IUser) => void;
}
type Props = {}

function View({ }: Props) {
    const [userDate, setUserdate] = useState(data)
    // useEffect(() => {
    //     setUserdate(props.userDate)
    //   }, [props]);
    //const dayOfYear = (date: Date): number => Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));
    return (
        <><div>
            <div className='data'>
                {data.map(date => {
                    return (
                        <div>
                            {date.name}
                            {date.birthday}
                        </div>
                    );
                })}
            </div>
        </div><>
                <div className='update' >
                    <input type="text" placeholder='enter year' className='year'></input><br></br>
                    <div> <button type="submit" className="save">
                        update
                    </button></div>
                    <div className='grid-container'>
                        <div className='card'>
                            <label className='Days'>Monday</label>
                        </div>
                        <div className='card'>
                            <label className='Days'>Tuesday</label>
                        </div>
                        <div className='card'>
                            <label className='Days'>Wednesday</label>
                        </div>
                        <div className='card'>
                            <label className='Days'>Thursday</label>
                        </div>
                    </div>
                    <div className='grid-container'>
                        <div className='card'>
                            <label className='Days'>Friday</label>
                        </div>
                        <div className='card'>
                            <label className='Days'>Saturday</label>
                        </div>
                        <div className='card'>
                            <label className='Days'>Sunday</label>
                        </div>

                    </div>
                </div></></>
    )
}

export default View
interface IProps {
    data: IUser[]
}