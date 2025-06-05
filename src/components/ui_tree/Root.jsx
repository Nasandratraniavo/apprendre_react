import FancyText from './components/ui_tree/FancyText';
import InspirationGenerator from './components/ui_tree/InspirationGenerator';
import Copyright from './components/ui_tree/Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspiraationGenerator>
        <Copyright year={2004} />
      </InspiraationGenerator>
    </>
  );
}
