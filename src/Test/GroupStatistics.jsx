import React, {useEffect, useState} from 'react';
import GeneralCardWithoutImage from './GeneralCardWithoutImage';



function GroupStatistics(props) {
    const groupId = "8124498";
    const [data, setData] = useState(0);
    

    useEffect(() => {
        fetch('https://api.allorigins.win/get?url=https://groups.roblox.com/v1/groups/12093188')
        .then(res => res.json())
        .then(result => setData(result.memberCount));
    })

  return (
    <>
        <GeneralCardWithoutImage title={"Group Members"} text={data} footer={""} />
    </>
    
  );
}

export default GroupStatistics;