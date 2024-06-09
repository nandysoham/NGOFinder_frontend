// Tests rendering of all components
import { render, screen } from '@testing-library/react';
import ContactMaps from '../Components/ContactMaps';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header';
import Layout from '../Components/Layout';
import Spinner from '../Components/Spinner/Spinner';
import Togglemode from '../Components/ToggleMode';
import TextEditor from '../Container/CKEditor/TextEditor'

test('renders contact Maps ', () => {
    render(<ContactMaps/>);
  });

test('renders Footers ', () => {
render( <Footer/> );
});


// test('renders Headers ', () => {
// render( <Header />);
// });

// cannot test layouts as open with children
// test('renders Layouts ', () => {
//     render( <Layout/> );
//     });

test('renders Spinners ', () => {
    render( <Spinner/> );
    });

test('renders ToggleMode ', () => {
    render( <Togglemode/> );
    });  


