import React, { useState } from 'react'
import { View, Boxed } from "styles/shared-components";
import Input from '../Input';



  
function SearchPost() {
    const [keyword, setKeyword] = useState("")
    
    return (
        <View>
            <Boxed>
                <form noValidate autoComplete="off">
                    <Input keyword={keyword} setKeyword={setKeyword}/>
                </form>
            </Boxed>
        </View>
    )
}

export default SearchPost
