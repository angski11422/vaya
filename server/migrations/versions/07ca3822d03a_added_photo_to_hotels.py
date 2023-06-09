"""added photo to hotels

Revision ID: 07ca3822d03a
Revises: 9f6bafcb58fd
Create Date: 2023-06-09 09:49:15.168735

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07ca3822d03a'
down_revision = '9f6bafcb58fd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hotels', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hotels', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###