import ModalAddNote from "./ModalAddNote";
import ModalUpdate from "./ModalUpdate";
import React, { useEffect, useState } from "react";

import Card from './Card';
import AddButton from "./AddButton";
const ArrayData = () => {
    const [editedval, setEditedval] = useState();


    const [subHeading, setSubHeading] = useState("");
    const [isShowAddBtn, setIsShowAddBtn] = useState(false);
    const [isUpdateShow, setIsUpdateShow] = useState(false);
    const [headingModal, setHeadingModal] = useState("Add Note")
    const [obj, setobj] = useState({
        note: "",
        id: "",
        completed: false
    });

    const ref = React.useRef(null);
    const [arr, setArr] = useState([]);
    const [search, setSearch] = useState('');


    const filteredArray = search ? arr.filter(el => el.note.includes(search)) : arr;


    console.log(typeof (search));

    useEffect(() => {
        setArr(() => {
            const getData = localStorage.getItem("notes");
            const parsedData = JSON.parse(getData);
            return parsedData;
        })
    }, []);

    const addNoteinputVal = (e) => {
        setobj((prev) => ({
            ...prev,
            note: e.target.value.toLowerCase(),
            id: arr.length + 1,
            completed: false
        }))
    }


    const UpdateinputVal = (e) => {
        setobj((prev) => ({
            ...prev,
            note: e.target.value.toLowerCase(),
        }))

    }
    const addNote = () => {
        setIsShowAddBtn(false);

        obj.note.length === 0 ?
            alert("Please Enter Some Content You Cannot Sumbit Empty Note ") : setArr((prev) => {
                const dataArray = [...prev];
                dataArray.push(obj);
                localStorage.setItem("notes", JSON.stringify(dataArray));
                const getdata = localStorage.getItem("notes");
                const parsedData = JSON.parse(getdata);
                return parsedData;
            });




        setobj((prev) => ({
            ...prev,
            note: "",
        }))
    }

    const editNote = (element, index) => {
        setHeadingModal(`You Currently Updating Note no. ${element.id}`);
        setIsUpdateShow(true);
        setobj((prev) => ({
            ...prev,
            note: element.note,
        }));

        setEditedval(() => {
            const updatedVal = index;
            return updatedVal
        });
    }





    const deleteNote = (Id) => {
        setArr(() => {
            const getData = localStorage.getItem("notes");
            const getParseddata = JSON.parse(getData);
            // getData.splice(e-1,1);
            const filteredData = getParseddata.filter((e) => { return e.id !== Id });
            localStorage.setItem("notes", JSON.stringify(filteredData));
            const freshData = localStorage.getItem("notes");
            const freshParsedData = JSON.parse(freshData);
            return freshParsedData;
        });

        setSubHeading(` Note no.${Id} Deleted SuccessFully`);

        setTimeout(() => {
            setSubHeading("");
        }, 2000)
    }

    const updateNote = () => {
        obj.note.length === 0 ?
            alert("Please enter some content You cannot enter empty note") :
            setArr(() => {
                const getData = localStorage.getItem("notes");
                const parsedData = JSON.parse(getData);
                parsedData[editedval].note = obj.note;
                localStorage.setItem("notes", JSON.stringify(parsedData));
                const freshData = localStorage.getItem("notes");
                const freshParsedData = JSON.parse(freshData);
                return freshParsedData;
            });

        setobj((prev) => ({
            ...prev,
            note: "",
        }))
        setIsUpdateShow(false);
    }

    const handleClickCheck = (element) => {
        const getData = localStorage.getItem("notes");
        const parsedData = JSON.parse(getData);
        const index = parsedData.findIndex(el => el.id === element.id);
        const copyArray = [...parsedData];
        copyArray[index].completed = !copyArray[index].completed;
        localStorage.setItem("notes", JSON.stringify(copyArray));
        const freshData = localStorage.getItem("notes");
        const freshParsedData = JSON.parse(freshData);
        setArr(freshParsedData);
    }

    useEffect(() => {
        // if(isShow) {
        //     ref.current.focus();
        // }
        isShowAddBtn && ref.current.focus();
    }, [isShowAddBtn]);

    useEffect(() => {
        isUpdateShow &&
            ref.current.focus();
    }, [isUpdateShow]);


    const isModalhidden = () => {
        setIsShowAddBtn(true);
        // ref.current.focus();
    }


    const closeButtonAddButton = () => {
        setobj((prev) => ({
            ...prev,
            note: "",
        }))
        setIsShowAddBtn(false);
    }

    const closeButtonUpdateButton = () => {
        setobj((prev) => ({
            ...prev,
            note: "",
        }))
        setIsUpdateShow(false);


    }

    const SubmitAddBtn = (e) => {
        e.preventDefault();
        addNote();
    }


    const updateSubmitButton = (e) => {
        e.preventDefault();
        updateNote();
    }

    useEffect(() => {

    })

    const Search = (e) => {
        const searchTxt = e.target.value.toLowerCase();
        setSearch(searchTxt);
    }

    return (
        <>

            <div className="container">

                {/* <Button className="d-block mx-auto my-4" variant="primary" onClick={() => setIsShow(true)}>
         Add Note
        </Button> */}
                {/* <Test ref = {ref} onChange = {onChange}/> */}

                <AddButton isModalhidden={isModalhidden} Search={Search} />
                < ModalAddNote addNote={addNote} AddNotevalue={obj.note} SubmitAddBtn={SubmitAddBtn} ref={ref} isShowAddBtn={isShowAddBtn} addNoteinputVal={addNoteinputVal} closeButtonAddButton={closeButtonAddButton} />
                <ModalUpdate updateNote={updateNote} updateValue={obj.note} updateSubmitButton={updateSubmitButton} ref={ref} isUpdateShow={isUpdateShow} UpdateinputVal={UpdateinputVal} closeButtonUpdateButton={closeButtonUpdateButton} headingModal={headingModal} />
                <Card subHeading={subHeading} resultedArray={filteredArray} editNote={editNote} deleteNote={deleteNote} handleClickCheck={handleClickCheck} />
            </div>
        </>
    );

}

export default ArrayData;