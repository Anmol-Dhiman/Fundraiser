import React from 'react'

const profileImg = () => {
    let input = document.getElementById("inputTag");
        let imageName = document.getElementById("imageName")
    const imgUploader = () =>{
        input.addEventListener("change", ()=>{
            let inputImage = document.querySelector("input[type=file]").files[0];

            imageName.innerText = inputImage.name;
        })
    }
  return (
    <div>
        Select Image <br/>
        <input onClick={imgUploader} id="inputTag" type="file"/>
        <br/>
        <span id="imageName"></span>
    </div>
  )
}

export default profileImg