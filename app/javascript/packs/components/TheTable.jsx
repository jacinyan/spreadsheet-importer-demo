import React, {
  forwardRef,
  Fragment,
  useMemo,
  useState,
  useEffect,
  useRef,
} from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

import _ from 'lodash';
import MaterialTable from 'material-table';
import { usePeople } from '../hooks/usePeople';
import { useLocations } from '../hooks/useLocations';
import { useAffiliations } from '../hooks/useAffiliations';

const TheTable = () => {
  const {
    data: _people,
    isLoading,
    isError,
    pageSize,
    page,
    setPage,
    totalCount,
  } = usePeople();

  const { data: _locations } = useLocations();
  const { data: _affiliations } = useAffiliations();

  const people = useMemo(() => {
    return _people.map((item) => {
      const picked = _.pick(item, ['id', 'attributes', 'relationships']);
      const {
        attributes,
        relationships: {
          locations: { data: _locations_ },
          affiliations: { data: _affiliations_ },
        },
        id,
      } = picked;

      const locs = _locations_.reduce((acc, curr) => [...acc, curr.id], []);

      const affls = _affiliations_.reduce((acc, curr) => [...acc, curr.id], []);

      return {
        ...attributes,
        locations: locs,
        affiliations: affls,
        id,
      };
    });
  }, [_people]);
  console.log(people);

  const locations = useMemo(() => {
    return _locations.map((item) => {
      const picked = _.pick(item, ['id', 'attributes']);
      const { attributes, id } = picked;

      return {
        ...attributes,
        id,
      };
    });
  }, [_locations]);

  const affiliations = useMemo(() => {
    return _affiliations.map((item) => {
      const picked = _.pick(item, ['id', 'attributes']);
      const { attributes, id } = picked;

      return {
        ...attributes,
        id,
      };
    });
  }, [_affiliations]);

  return (
    <MaterialTable
      title={'Star Wars'}
      icons={tableIcons}
      data={people}
      columns={[
        {
          title: 'First Name',
          field: 'first-name',
        },
        {
          title: 'Last Name',
          field: 'last-name',
        },
        {
          title: 'Locations',
          field: 'locations',
          render: (rowData) => {
            // console.log('!@#$%', locations);
            // console.log('asdfg', rowData.locations);

            const result = _.chain(locations)
              .keyBy('id')
              .at(rowData.locations)
              .value();
            // console.log(result);

            return (
              <>
                {result.map((item) => {
                  return <Fragment key={item?.name}>{item?.name}</Fragment>;
                })}
              </>
            );
          },
        },
        {
          title: 'Species',
          field: 'species',
        },
        {
          title: 'Gender',
          field: 'gender',
        },
        {
          title: 'Affiliations',
          field: 'affiliations',
          render: (rowData) => {
            // console.log('!@#$%', locations);
            // console.log('asdfg', rowData.locations);

            const result = _.chain(affiliations)
              .keyBy('id')
              .at(rowData.affiliations)
              .value();
            // console.log(result);

            return (
              <>
                {result.map((item) => {
                  return <Fragment key={item?.name}>{item?.name}</Fragment>;
                })}
              </>
            );
          },
        },
        {
          title: 'Weapon',
          field: 'weapon',
        },
        {
          title: 'Vehicle',
          field: 'vehicle',
        },
      ]}
      isLoading={isLoading}
      options={{ pageSize, pageSizeOptions: [pageSize], loadingType: 'linear' }}
      page={page}
      totalCount={totalCount}
      onChangePage={(page) => {
        // console.log('onChangePage', page);
        setPage(page);
      }}
    />
  );
};

export default TheTable;
