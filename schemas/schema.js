import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import ingredient from './ingredient'
import recipe from './recipe'
import gear from './gear'
import postImage from './post-image'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    category,
    recipe,
    ingredient,
    blockContent,
    gear,
    postImage,
  ]),
})
