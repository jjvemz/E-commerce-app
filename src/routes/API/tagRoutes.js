const router = require('express').Router()
const {
    getAllTags,
getTagById,
createTag,
updateTag,
deleteTag
} = require('../../controllers/tagController')

router.get('/', getAllTags)

router.get('/:id', getTagById)

router.post('/', createTag)

router.put('/:id', updateTag)

router.delete('/:id', deleteTag)

module.exports = router