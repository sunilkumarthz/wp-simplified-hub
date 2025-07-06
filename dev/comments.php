<?php
/**
 * The template for displaying comments
 * 
 * @package WPSimplified
 */

if (post_password_required()) {
    return;
}
?>

<div id="comments" class="comments-area" style="margin-top: 3rem; padding-top: 3rem; border-top: 1px solid var(--wp-border);">
    
    <?php if (have_comments()) : ?>
        <h3 class="comments-title" style="margin-bottom: 2rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <?php
            $comment_count = get_comments_number();
            if ($comment_count == 1) {
                _e('1 Comment', 'wpsimplified');
            } else {
                printf(__('%s Comments', 'wpsimplified'), $comment_count);
            }
            ?>
        </h3>

        <ol class="comment-list" style="list-style: none; padding: 0;">
            <?php
            wp_list_comments(array(
                'style'       => 'ol',
                'short_ping'  => true,
                'avatar_size' => 50,
                'callback'    => 'wpsimplified_comment_callback',
            ));
            ?>
        </ol>

        <?php the_comments_navigation(); ?>

    <?php endif; ?>

    <?php if (!comments_open() && get_comments_number() && post_type_supports(get_post_type(), 'comments')) : ?>
        <p class="no-comments" style="color: var(--wp-muted-foreground); font-style: italic;">
            <?php _e('Comments are closed.', 'wpsimplified'); ?>
        </p>
    <?php endif; ?>

    <?php
    // Comment form
    if (comments_open()) {
        $comment_form_args = array(
            'title_reply'       => __('Leave a Comment', 'wpsimplified'),
            'title_reply_to'    => __('Leave a Reply to %s', 'wpsimplified'),
            'cancel_reply_link' => __('Cancel Reply', 'wpsimplified'),
            'label_submit'      => __('Post Comment', 'wpsimplified'),
            'comment_field'     => '<div style="margin-bottom: 1.5rem;">
                                        <label for="comment" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">' . _x('Comment', 'noun', 'wpsimplified') . ' <span style="color: var(--wp-destructive);">*</span></label>
                                        <textarea id="comment" name="comment" cols="45" rows="6" maxlength="65525" required="required" style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground); resize: vertical;" placeholder="' . __('Share your thoughts...', 'wpsimplified') . '"></textarea>
                                    </div>',
            'fields'            => array(
                'author' => '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                                <div>
                                    <label for="author" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">' . __('Name', 'wpsimplified') . ' <span style="color: var(--wp-destructive);">*</span></label>
                                    <input id="author" name="author" type="text" value="' . esc_attr($commenter['comment_author']) . '" size="30" maxlength="245" required="required" style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);" />
                                </div>',
                'email'  => '<div>
                                <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">' . __('Email', 'wpsimplified') . ' <span style="color: var(--wp-destructive);">*</span></label>
                                <input id="email" name="email" type="email" value="' . esc_attr($commenter['comment_author_email']) . '" size="30" maxlength="100" aria-describedby="email-notes" required="required" style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);" />
                            </div>
                        </div>',
                'url'    => '<div style="margin-bottom: 1.5rem;">
                                <label for="url" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">' . __('Website', 'wpsimplified') . '</label>
                                <input id="url" name="url" type="url" value="' . esc_attr($commenter['comment_author_url']) . '" size="30" maxlength="200" style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);" />
                            </div>',
            ),
            'class_form'        => 'comment-form card',
            'class_submit'      => 'btn btn-primary',
            'submit_button'     => '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>',
        );
        
        echo '<div style="margin-top: 3rem;">';
        comment_form($comment_form_args);
        echo '</div>';
    }
    ?>

</div>

<style>
.comment-form {
    padding: 2rem;
    margin-top: 2rem;
}

.comment-form h3 {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.comment-reply-link {
    font-size: 0.875rem;
    color: var(--wp-primary);
    text-decoration: none;
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--wp-primary);
    border-radius: 0.25rem;
    transition: all 0.3s ease;
}

.comment-reply-link:hover {
    background: var(--wp-primary);
    color: var(--wp-background);
}

.comment-navigation {
    margin: 2rem 0;
}

@media (max-width: 768px) {
    .comment-form .grid {
        grid-template-columns: 1fr !important;
    }
}
</style>

<?php
// Custom comment callback function
if (!function_exists('wpsimplified_comment_callback')) {
    function wpsimplified_comment_callback($comment, $args, $depth) {
        $GLOBALS['comment'] = $comment;
        ?>
        <li <?php comment_class('comment-item'); ?> id="comment-<?php comment_ID(); ?>">
            <div class="comment-body" style="padding: 1.5rem; margin-bottom: 1.5rem; background: rgba(30, 41, 59, 0.5); border-radius: 0.75rem; border-left: 3px solid var(--wp-primary);">
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                    <div style="flex-shrink: 0;">
                        <?php echo get_avatar($comment, 50, '', '', array('style' => 'border-radius: 50%;')); ?>
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <h4 style="margin: 0; font-size: 1rem; font-weight: 600;">
                                <?php comment_author(); ?>
                            </h4>
                            <time style="color: var(--wp-muted-foreground); font-size: 0.875rem;">
                                <?php comment_date(); ?> at <?php comment_time(); ?>
                            </time>
                        </div>
                        
                        <?php if ($comment->comment_approved == '0') : ?>
                            <p style="color: var(--wp-muted-foreground); font-style: italic; margin-bottom: 1rem;">
                                <?php _e('Your comment is awaiting moderation.', 'wpsimplified'); ?>
                            </p>
                        <?php endif; ?>
                        
                        <div style="margin-bottom: 1rem; line-height: 1.6;">
                            <?php comment_text(); ?>
                        </div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <?php
                            comment_reply_link(array_merge($args, array(
                                'depth'     => $depth,
                                'max_depth' => $args['max_depth'],
                                'reply_text' => __('Reply', 'wpsimplified'),
                            )));
                            ?>
                            
                            <?php edit_comment_link(__('Edit', 'wpsimplified'), '<span style="font-size: 0.875rem;">', '</span>'); ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php
    }
}
?>