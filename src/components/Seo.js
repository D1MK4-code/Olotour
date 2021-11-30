/* import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                name: "og:description",
                content: metaDescription,
              },
              {
                name: "og:title",
                content: metaTitle,
              },
              {
                name: "og:type",
                content: website,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: "keywords",
                    content: metaKeywords.join(", "),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
 */
