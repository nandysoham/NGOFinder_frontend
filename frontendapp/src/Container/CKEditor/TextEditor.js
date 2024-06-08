
import React, { Component, Fragment } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// more media buttons in https://ckeditor.com/old/forums/CKEditor-3.x/need-add-media-button
class TextEditor extends Component {
  render() {
    const { value, onChange, setVar } = this.props // <- Dont mind this, just handling objects from props because Im using this as a shared component.

    const custom_config = {
      extraPlugins: [MyCustomUploadAdapterPlugin],
      toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'blockQuote',
          'insertTable',
          'Outdent',
          'Indent',
          '|',
          'StrikeThrough',
          'Subscript',
          'Superscript',
          '|',
          'imageUpload',
          'MediaEmbed',
          'undo',
          'redo'
        ]
      },
      table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
      }
    }

    return (
      <CKEditor
        required
        editor={ClassicEditor}
        config={custom_config}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData()
          setVar(data)
        }}
      />
    )
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader)
  }
}


class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader

    // Nothing here
    // The file loader instance to use during the upload.
    // this.loader = loader;
  }

  // Starts the upload process.
  upload() {

    
    return this.loader.file
      .then((file) => {
        let formdata = new FormData();
        console.log(file)
        formdata.append("blogimg", file)
        console.log(formdata)
        return formdata
      })
      .then(async (x) => {
        
        const resp = await fetch("http://localhost:2000/api/uploadAdapter", {
          method: "POST",
          body: x
        })
        return resp.json();
      })
      .then(x => {console.log(x); return x;})
      .catch(e => {
        console.log(e);
      })
    // console.log(this.loader)
    // console.log(this.loader.file)
    // const submitImage = async (file) =>{
    //   let formdata = new FormData()
    //   formdata.append("blogimg", file)

    //   const response = await fetch("http://localhost:2000/api/uploadAdapter", {
    //       method: "POST",
    //       body: formdata
    //   })

    //   return response;
  }

  // return submitImage(this.loader.file);




  // Update the loader's progress.
  // server.onUploadProgress( data => {
  //     loader.uploadTotal = data.total;
  //     loader.uploaded = data.uploaded;
  // } );

  // // Return a promise that will be resolved when the file is uploaded.
  // return loader.file
  //     .then( file => server.upload( file ) );


// Aborts the upload process.
abort() {
  // Reject the promise returned from the upload() method.
  // server.abortUpload();
}
}

export default TextEditor;
