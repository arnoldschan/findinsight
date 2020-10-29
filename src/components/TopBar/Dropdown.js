import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Option } from "styles/shared-components";

const DropdownMenu = () => {
      const history = useHistory();


    return (
          <Dropdown
          select
            SelectProps={{native:true}}
            label="Data Source"
            onChange={(e)=>history.push(e.target.value)}
          >
            {[{title: 'Social media data', link: "/social-media-data"},{title: 'Coming Soon', link: "/coming-soon"}].map((option) => (
            <Option  key={option.title} value={option.link}>{option.title}</Option>
            ))}
          </Dropdown>
    )
}
export default DropdownMenu;