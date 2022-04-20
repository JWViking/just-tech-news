const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes:['id', 'comment_text', 'user_id', 'post_id', 'createdAt'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {model: Post, attributes: ['title']}
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: require.params.id
        }
    })
        .then(dbCommentData => {
            if(!dbCommentData) {
                res.status(404).json({message: 'No comment with this id'});
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;