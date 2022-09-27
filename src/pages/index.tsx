import { GetServerSideProps } from 'next';

import SubMenu from '~/components/SubMenu';
import { authenticatedRoute } from '~/utils/redirects';

const Index = () => {
	return (
		<>
			<SubMenu />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = authenticatedRoute;

export default Index;
