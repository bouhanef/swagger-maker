import { useEffect, useState } from 'react';
import './App.css';
import { Dropdown } from 'flowbite-react';
import Editor from '@monaco-editor/react';

function App() {

  const [oasVersion, setOasVersion] = useState(null);
  const [oas, setOas] = useState({});

  useEffect(() => {
    oas.version = oasVersion;
    setOas(oas);
  }, [oasVersion])

  return (
    <div className='flex flex-col m-10'>
      <Dropdown
        label="OAS Version"
      >
        <Dropdown.Item onClick={()=>setOasVersion("2.0")}>
          2.0
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>setOasVersion("3.0.3")}>
          3.0.3
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>setOasVersion("3.1.0")}>
          3.1.0
        </Dropdown.Item>
      </Dropdown>

      <Editor height="90vh" defaultLanguage="json" defaultValue="{}" />;
      
    </div>
  );
}

export default App;
