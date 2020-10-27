import React, { useState } from 'react'
import { View, Boxed } from "styles/shared-components";
import Input from "./Input";



  
function SearchPost() {
    const [keyword, setKeyword] = useState("")
    
    return (
        <View>
            <Boxed>
                    <Input keyword={keyword} setKeyword={setKeyword}/>
            </Boxed>
        </View>
    )
}

export default SearchPost
