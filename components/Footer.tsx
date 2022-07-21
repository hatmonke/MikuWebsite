import dynamic from 'next/dynamic';

import Container from './Container';
import projectConfig from '../config/projectConfig';

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-8">
          <div>
            © {getCurrentYear()} {projectConfig.projectName}
          </div>

        </div>
      </Container>
    </footer>
  );
}
