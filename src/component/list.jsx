import React, { useState } from 'react';


// var itemList = [
//     {
//         id: 1,
//         title: "This is the Title1",
//         txt: "This is List item1"
//     },
//     {
//         id: 2,
//         title: "This is the Titl2",
//         txt: "This is List item2"
//     },
//     {
//         id: 3,
//         title: "This is the Title4",
//         txt: "This is List item3"
//     },
//     {
//         id: 4,
//         title: "This is the Title4",
//         txt: "This is List item3"
//     }
// ]








function List() {

    const [listNote, addList] = useState([ {
        id: 1,
        title: "This is the Title1",
        txt: "This is List item1",
        status:"Pending"
    }]);


    function addNewNote(event) {

        var temp = {
            id: listNote.length + 1,
            title: event.target[0].value,
            txt: event.target[1].value,
            status:"Pending"
        }    
             
        addList((prevItems) => {
            return [...prevItems, temp]
        });

        document.getElementById("addnotFrm").reset()

        event.preventDefault();
    }

    function updateNote(event){
        if(event.target.innerText === "Done"){
            listNote[event.target.value - 1].status = "Pending";
        }else{
            listNote[event.target.value - 1].status = "Done";
        }
        
        addList((prevItems) => {
            return [...prevItems]
        });
        console.log(event.target.innerText);
       
    }

    function Item(props) {

        return (<div class="col ">
            <div class="card list p-0">
                <div class="card-body ">
                    <h2 class="card-title">{props.title}</h2>
                    <p class="card-text">{props.txt}</p>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-end">
                    <button type="button" className="btn btn-sm btn-primary mr-2" id="updateNotebtn" name="noteDelete" value={props.id} onClick={updateNote}>{props.sts}</button>
                    </div>
                </div>
            </div>
        </div>
        );
    
    }


    return (
        <div className="container">
            <div className="listCont row my-5">
                <div class="col-5">
                    <div class="card">
                        <div class="card-body">
                            <form onSubmit={addNewNote} id="addnotFrm">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="noteTitle" name="noteTitle" placeholder="Enter title" required/>
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" id="noteDetail" name="noteDetail" rows="3" placeholder="Enter Detail"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="container">
                        <div class="row row-cols-1 row-cols-md-2 g-2">
                            {
                                listNote.map(ItemList =>
                                    <Item
                                        key={ItemList.id}
                                        id={ItemList.id}
                                        title={ItemList.title}
                                        txt={ItemList.txt}
                                        sts={ItemList.status}
                                    />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default List;