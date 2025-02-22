import toast, { Toaster } from 'react-hot-toast';

// get all the value from localstorage 
export const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('blogs');
    if(data){
        const dataParsed = JSON.parse(data);
        return dataParsed;
    }
    else{
        
        return [];
    }
    
}



// save data to local storage
export const saveDataToLocalStorage = (blogs) => {

    const takeDataFromLocalStorage = getDataFromLocalStorage();
    const data = takeDataFromLocalStorage.find(blog => blog.id === blogs.id);
    if(data){
        return toast.error('Data already exist in local storage');
    }
    takeDataFromLocalStorage.push(blogs);
    localStorage.setItem('blogs', JSON.stringify(takeDataFromLocalStorage));
   
    return toast.success('Data saved to local storage');
}




// delete data from local storage
export const deleteDataFromLocalStorage = (id) => {
    const takeDataFromLocalStorage = getDataFromLocalStorage();
    const data = takeDataFromLocalStorage.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(data));
    toast.success('Data deleted from local storage');
    return;
}