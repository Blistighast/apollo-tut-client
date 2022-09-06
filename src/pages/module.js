import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";

const MODULE = gql`
  query getModuleAndTrack($trackId: ID!, $moduleId: ID!) {
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
  }
  module(id: $moduleId) {
    id
    title
    content
    videoUrl
  }
}
`

const Module = ({ trackId, moduleId }) => {
  const { error, loading, data } = useQuery(MODULE, {
    variables: {
      trackId,
      moduleId,
    }
  })

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  )
}

export default Module