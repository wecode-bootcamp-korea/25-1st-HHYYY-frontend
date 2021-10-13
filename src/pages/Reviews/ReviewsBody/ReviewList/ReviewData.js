const REVIEW_DATA = 
[{
                  'user_name'     : review.user.name,
                  'content'       : review.content,
                  'image'         : review.image_url,
                  'rating'        : review.rating,
                  'like_count'    : review.review_like_set.all().count(),
                  'comment_count' : review.review_comment_set.all().count(),
                  'created_at'    : review.created.at,
              } for review in reviews]
  
  [{
                    'user_name'     : review.user.name,
                    'content'       : review.content,
                    'image'         : review.image_url,
                    'rating'        : review.rating,
                    'like_count'    : review.review_like_set.all().count(),
                    'comment_count' : review.review_comment_set.all().count(),
                    'created_at'    : review.created.at,
                } for review in reviews]

    [{
                      'user_name'     : review.user.name,
                      'content'       : review.content,
                      'image'         : review.image_url,
                      'rating'        : review.rating,
                      'like_count'    : review.review_like_set.all().count(),
                      'comment_count' : review.review_comment_set.all().count(),
                      'created_at'    : review.created.at,
                  } for review in reviews]