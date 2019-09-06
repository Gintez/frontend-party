import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as serverActions from 'app/redux/servers/actions';
import { getServersList } from 'app/redux/servers/selectors';
import { ServersModel } from 'app/types';
import Header from 'app/components/header';
import Table from 'app/atoms/table';
import TableRow from 'app/atoms/table-row';
import TableHead from 'app/atoms/table-head';
import TableData from 'app/atoms/table-data';

interface StateProps {
    servers: ServersModel,
}

interface DispatchProps {
    actions: {
        servers: typeof serverActions,
    },
}

type Props = DispatchProps & StateProps;

const ServerListPage = ({ actions, servers }: Props) => {
    React.useEffect(() => {
        actions.servers.fetchServersList();

        return actions.servers.resetServersList;
    }, []);
    if (!servers) { return null; }

    return (
        <div>
            <Header />
            <Table>
                <TableRow>
                    <TableHead>Server</TableHead>
                    <TableHead align="right">Distance</TableHead>
                </TableRow>
                {servers.map(server => (
                    <TableRow key={`${server.name} ${server.distance}`}>
                        <TableData>{server.name}</TableData>
                        <TableData align="right">{server.distance}</TableData>
                    </TableRow>
                ))}
            </Table>
        </div>
    );
};

const mapStateToProps = (state: any): StateProps => ({
    servers: getServersList(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        servers: bindActionCreators(serverActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerListPage);
