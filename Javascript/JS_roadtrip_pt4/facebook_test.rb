require 'fb_graph2'

fred_id = 10152863806411319
access_token = "CAACEdEose0cBAFyyLzCdIm4Kz1cWoT8cyIS8C26wDpXrYsU9JId7dLoz6h04vSeOBZAGi3blgYKv9uO3k4LF3vDW0aiqAZBiASqhKIH47gfRG42EImlm6vCqAzfuOGNDtadIGuAeXGtVCOpHVO6ZBLzo0cJeQPUdRs9q3QbCev0WZAK2AlLdJyhJwoNWem7gnWBvadJ2J0x3ZCCvZCLoxM"

user = FbGraph2::User.new('user_id').authenticate('access_token')
user.fetch
user.statuses