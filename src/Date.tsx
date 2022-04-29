import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { IUser } from "./type";
import data from './data.json'
function Date(props: IProps) {
    const [searchInput, setSearchInput] = useState("");
    const dayOfYear = (date: Date): number => Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));

    const [query, setQuery] = useState<IUser[]>()
    const getSearch = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        // setQuery(userstate.filter(userstate=>userstate.first_name))

        const item = data.filter(data => data.name === searchInput())

      
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

            setSearchInput(e.target.value);

            console.log(searchInput)
        }
        return (
            <><input type="text" className="srchbar" value={searchInput} onChange={onChange} />
                <button type='submit' className="submitbtn" onClick={() => getSearch}>Search</button></>
        )
    }
}

    export default Date
    interface IProps {
        
        data: IUser[]
    }