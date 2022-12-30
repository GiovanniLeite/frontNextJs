import Header from '..';
import { customRender } from '../../../utils/customRender';

describe('Components <Header />', () => {
  it('should render <Header />', () => {
    const { getByText } = customRender(<Header />);

    expect(getByText('blog 17')).toBeInTheDocument();
    expect(getByText('MENU')).toBeInTheDocument();
    expect(getByText('Entrar')).toBeInTheDocument();
    expect(getByText('Sair')).toBeInTheDocument();
  });
});
